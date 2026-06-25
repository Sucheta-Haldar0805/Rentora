const razorpay = require("../utils/razorpay");
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const Payment = require("../models/payment");
const crypto = require("crypto");
const PDFDocument = require("pdfkit");



exports.createOrder = async (req, res) => {

try {

const { listingId } = req.params;
const { checkIn, checkOut, guests } = req.body;


const listing = await Listing.findById(listingId);



const start = new Date(checkIn);
const end = new Date(checkOut);


const nights = Math.ceil(
(end - start) / (1000 * 60 * 60 * 24)
);


const totalAmount = nights * listing.price;



const booking = new Booking({

listing: listing._id,

user:req.user._id,

checkIn,

checkOut,

guests,

totalPrice: totalAmount

});


await booking.save();



const order = await razorpay.orders.create({

amount: totalAmount * 100,

currency:"INR",

receipt:booking._id.toString()

});



res.json({

orderId:order.id,

amount:order.amount,

bookingId:booking._id,

key:process.env.RAZORPAY_KEY_ID

});


}

catch(err){

console.log(err);

res.status(500).json({

success:false,

message:"Payment error"

});

}

};





exports.verifyPayment = async(req,res)=>{


try{


const {

razorpay_payment_id,

razorpay_order_id,

razorpay_signature,

bookingId

}=req.body;



const body =
razorpay_order_id+"|"+razorpay_payment_id;



const expectedSignature =
crypto
.createHmac(
"sha256",
process.env.RAZORPAY_KEY_SECRET
)
.update(body)
.digest("hex");



if(expectedSignature !== razorpay_signature){

return res.json({
success:false
});

}



const booking =
await Booking.findByIdAndUpdate(

bookingId,

{

status:"confirmed",

paymentId:razorpay_payment_id

},

{new:true}

)
.populate("listing user");





const payment = new Payment({

booking:booking._id,

user:booking.user._id,

listing:booking.listing._id,

amount:booking.totalPrice,

paymentId:razorpay_payment_id,

orderId:razorpay_order_id,

status:"Success"

});



await payment.save();



res.json({

success:true,

paymentId:payment._id

});



}

catch(err){

console.log(err);

res.status(500).json({
success:false
});

}


};







exports.showReceipt = async(req,res)=>{


try{


const payment =
await Payment.findById(req.params.paymentId)

.populate("user")

.populate("listing")

.populate("booking");



if(!payment){

return res.status(404)
.send("Payment not found");

}



res.render(
"payments/receipt",
{
payment
}
);



}

catch(err){

console.log(err);

res.status(500)
.send("Something went wrong");

}


};







exports.downloadReceiptPDF = async(req,res)=>{

try{

const payment = await Payment.findById(req.params.id)
.populate("user")
.populate("listing")
.populate("booking");


if(!payment){
    return res.status(404).send("Payment not found");
}
res.setHeader(
"Content-Type",
"application/pdf"
);

res.setHeader(
"Content-Disposition",
"attachment; filename=Rentora_Receipt.pdf"
);


const doc = new PDFDocument({
    size:"A4",
    margin:40
});

doc.pipe(res);


// ================= HEADER =================


doc.rect(0,0,595,90)
.fill("#ff385c");


doc.fillColor("white")
.fontSize(28)
.font("Helvetica-Bold")
.text(
"Rentora",
40,
25
);


doc.fontSize(14)
.font("Helvetica")
.text(
"Payment Receipt",
40,
60
);



// Success badge

doc.roundedRect(
390,
30,
150,
30,
10
)
.fill("#28a745");


doc.fillColor("white")
.fontSize(11)
.text(
"Payment Successful",
405,
40
);



// reset

doc.fillColor("#000");

let y = 130;



// row function

function row(title,value){

doc.fontSize(11)
.font("Helvetica")
.fillColor("#555")
.text(title,60,y);


doc.fillColor("#000")
.font("Helvetica-Bold")
.text(value,230,y);


y += 22;

}



// ================= TRANSACTION =================


doc.fillColor("#ff385c")
.fontSize(16)
.font("Helvetica-Bold")
.text(
"Transaction Details",
60,
y
);


y += 25;



row(
"Payment ID",
payment.paymentId
);


row(
"Order ID",
payment.orderId
);


row(
"Amount",
`Rs. ${payment.amount}`
);


row(
"Status",
payment.status
);


row(
  "Date",
  payment.createdAt
    ? new Date(payment.createdAt).toDateString()
    : new Date(payment._id.getTimestamp()).toDateString()
);




// ================= BOOKING =================


y += 20;


doc.fillColor("#ff385c")
.fontSize(16)
.font("Helvetica-Bold")
.text(
"Booking Details",
60,
y
);


y += 25;



row(
"Customer",
payment.user?.username || "Guest"
);


row(
"Property",
payment.listing?.title || "N/A"
);


row(
"Check In",
new Date(payment.booking.checkIn)
.toDateString()
);


row(
"Check Out",
new Date(payment.booking.checkOut)
.toDateString()
);




// Divider


doc.moveTo(60,y+10)
.lineTo(535,y+10)
.stroke("#dddddd");




// ================= FOOTER =================


doc.fillColor("#ff385c")
.font("Helvetica")
.fontSize(16)
.text(
"- Rentora -",
60,
y + 35,{align : "center",width : 475}
);



doc.fillColor("#777")
.font("Helvetica")
.fontSize(12)
.text(
"Thank you for choosing us",
60,
y + 70,
{
align:"center",
width:475
}
);



doc.fontSize(9)
.text(
"This is a computer-generated receipt.",
60,
y + 90,
{
align:"center",
width:475
});

// finish PDF

doc.end();



}

catch(err){

console.log("PDF ERROR:",err);


if(!res.headersSent){

res.status(500)
.send("PDF generation failed");

}

}

};