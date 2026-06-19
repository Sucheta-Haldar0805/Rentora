const express = require("express");
const router = express.Router({mergeParams : true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl , isLoggedIn} = require("../middleware.js");


const userController = require("../controllers/users.js");


router.route("/signup")
    .get(userController.renderSignupForm)
    .post( wrapAsync(userController.signup)
);

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl ,passport.authenticate("local" , 
    { failureRedirect: "/login",failureFlash : true}), 
    userController.login
);

router.get("/logout" , userController.logout);

router.post("/wishlist/:listingId", isLoggedIn, userController.addToWishlist);

router.delete("/wishlist/:listingId", isLoggedIn, userController.removeFromWishlist);

router.get("/wishlist", isLoggedIn, userController.showWishlist);

module.exports = router;