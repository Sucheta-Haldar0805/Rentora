const User = require("../models/user");

module.exports.renderSignupForm = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res) => {
    try {
        let { username,email,password } = req.body;
    const newUser = new User({email,username});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err) => {
        if(err) {
            return next(err);
        }
        req.flash("success" , "Welcome to Rentora!");
        res.redirect("/listings");
    })

    } catch(e){
        req.flash("error" , e.message);
        res.redirect("/signup");
    } 
};

module.exports.renderLoginForm = (req,res) => {
    res.render("users/login.ejs");
};

module.exports.login = async(req,res) => {
    console.log("=== LOGIN SUCCESS ===");
    console.log("req.user:", req.user);
    console.log("isAuthenticated:", req.isAuthenticated());

    req.flash("success","Welcome Back to Rentora!");
    res.redirect("/listings");
};

module.exports.logout = (req,res,next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    });
};

module.exports.addToWishlist = async (req, res) => {
    const { listingId } = req.params;

    const user = await User.findById(req.user._id);

    if (!user) {
        req.flash("error", "User not found");
        return res.redirect("/login");
    }

    if (!user.wishlist) user.wishlist = [];

    if (!user.wishlist.includes(listingId)) {
        user.wishlist.push(listingId);
        await user.save();
    }

    req.flash("success", "Added to wishlist!");
    res.redirect("/listings");
};

module.exports.removeFromWishlist = async (req, res) => {
    const { listingId } = req.params;

    await User.findByIdAndUpdate(req.user._id, {
        $pull: { wishlist: listingId }
    });

    req.flash("success", "Removed from wishlist!");
    res.redirect("/listings");
};

module.exports.showWishlist = async (req, res) => {
    const user = await User.findById(req.user._id).populate("wishlist");

    res.render("users/wishlist.ejs", { listings: user.wishlist });
};