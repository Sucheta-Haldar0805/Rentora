const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/razorpay");
const { isLoggedIn } = require("../middleware.js");

// create razorpay order
router.post(
    "/create-order/:listingId",
    isLoggedIn,
    paymentController.createOrder
);


// verify payment
router.post(
    "/verify",
    isLoggedIn,
    paymentController.verifyPayment
);


// show receipt page
router.get(
    "/:paymentId/receipt",
    isLoggedIn,
    paymentController.showReceipt
);


// download PDF receipt
router.get(
    "/:id/pdf",
    isLoggedIn,
    paymentController.downloadReceiptPDF
);

module.exports = router;


