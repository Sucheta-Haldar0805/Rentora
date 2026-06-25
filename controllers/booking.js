const razorpay = require("../utils/razorpay");
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const crypto = require("crypto");

exports.renderBookingForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  res.render("bookings/new", { listing });
};
exports.createOrder = async (req, res) => {
  console.log("KEY:", process.env.RAZORPAY_KEY_ID); // ← add this
  console.log("SECRET:", process.env.RAZORPAY_KEY_SECRET);
  try {
    const { listingId } = req.params;
    const { checkIn, checkOut, guests } = req.body; // ✅ FIXED

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
      totalPrice: totalAmount,
      status: "pending"
    });

    await booking.save();

    const order = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: booking._id.toString(),
    });

    return res.json({
      orderId: order.id,
      amount: totalAmount * 100,
      bookingId: booking._id,
      key: process.env.RAZORPAY_KEY_ID
    });

  } catch (err) {
    console.log("CREATE ORDER ERROR:", err); // 👈 IMPORTANT
    res.status(500).send("Payment error");
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
      await Booking.findByIdAndUpdate(bookingId, {
        status: "confirmed",
        paymentId: razorpay_payment_id
      });

      return res.json({ success: true });
    }

    return res.json({ success: false });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};