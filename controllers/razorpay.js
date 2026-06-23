const razorpay = require("../utils/razorpay");
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const Payment = require("../models/payment");
const crypto = require("crypto");

exports.createOrder = async (req, res) => {
  try {
    const { listingId } = req.params;
    const { checkIn, checkOut , guests} = req.body;

    const listing = await Listing.findById(listingId);

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    const totalAmount = nights * listing.price;

  const booking = new Booking({
    listing: listing._id,
    user: req.user._id,
    checkIn,
    checkOut,
    guests,
    totalPrice: totalAmount
  });

    await booking.save();

    const order = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: booking._id.toString(),
    });

    res.json({
      orderId: order.id,
      amount: totalAmount *100,
      bookingId: booking._id,
      key: process.env.RAZORPAY_KEY_ID,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
  success: false,
  message: "Payment error",
  error: err.message
});
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      bookingId
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      const booking = await Booking.findByIdAndUpdate(
  bookingId,
  {
    status: "confirmed",
    paymentId: razorpay_payment_id
  },
  { new: true }
).populate("listing user");

const payment = new Payment({
  booking: booking._id,
  user: booking.user._id,
  listing: booking.listing._id,
  amount: booking.totalPrice,
  paymentId: razorpay_payment_id,
  orderId: razorpay_order_id,
  status: "Success"
});

  await payment.save();

return res.json({
  success: true,
  paymentId: payment._id
});
  }

    return res.json({ success: false });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

exports.showReceipt = async (req, res) => {
  try {
    const { paymentId } = req.params;

    const payment = await Payment.findById(paymentId)
      .populate("user")
      .populate("listing")
      .populate("booking");

    if (!payment) {
      return res.status(404).send("Payment not found");
    }

    res.render("payments/receipt.ejs", { payment });

  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};