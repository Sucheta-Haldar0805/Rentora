const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking");
const { isLoggedIn } = require("../middleware");


router.get(
    "/:id/book",isLoggedIn,
    bookingController.renderBookingForm
);



module.exports = router;