const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  paymentId: {
    type: String,
    required: true
  },

  orderId: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Success"
  },

  paidAt: {
    type: Date,
    default: Date.now
  }
},{timestamps : true});

module.exports = mongoose.model("Payment", paymentSchema);