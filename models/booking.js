 /*const goose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    checkIn: {
        type: Date,
        required: true
    },

    checkOut: {
        type: Date,
        required: true
    },

    guests: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },


    paymentStatus:{
        type:String,
        enum:["pending","paid","failed"],
        default:"pending"
    },


    razorpayOrderId:{
        type:String
    },


    razorpayPaymentId:{
        type:String
    }


});


module.exports = mongoose.model("Booking", bookingSchema);*/


const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    checkIn: {
        type: Date,
        required: true
    },

    checkOut: {
        type: Date,
        required: true
    },

    guests: {
        type: Number,
        required: true
    },

    nights: {
        type: Number,
        required: true
    },

    subtotal: {
        type: Number,
        required: true
    },

    taxes: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    bookingStatus: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },

    razorpayOrderId: String,

    razorpayPaymentId: String,

    bookedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Booking", bookingSchema);