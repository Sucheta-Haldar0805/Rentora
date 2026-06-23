const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/razorpay");

router.post("/create-order/:listingId", paymentController.createOrder);

router.post("/verify-payment", paymentController.verifyPayment);
router.get(
  "/:paymentId/receipt",
  paymentController.showReceipt
);

module.exports = router;