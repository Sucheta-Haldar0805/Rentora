const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking");


router.get(
    "/:id/book",
    bookingController.renderBookingForm
);



module.exports = router;