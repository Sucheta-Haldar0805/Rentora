const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn ,isOwner ,validateListing } = require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer  = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn, 
        upload.single("listing[image]"),
        wrapAsync(listingController.createListing)
);


//New Route
router.get("/new" ,isLoggedIn,listingController.renderNewForm);

router.get("/category/:category",
    wrapAsync(listingController.filterCategory)
);

router
.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
    isLoggedIn , 
    isOwner,
    upload.single("listing[image]"),
    validateListing ,
    wrapAsync(listingController.updateListing))
    .delete(
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.destroyListing)
);



//Edit Route
router.get("/:id/edit",
     isLoggedIn,
     isOwner,
     wrapAsync(listingController.renderEditForm));

//search 
router.get("/search", wrapAsync(listingController.search));

router.get("/category/:category", async (req, res) => {
    const { category } = req.params;

    const allListings = await Listing.find({ category : category });
     console.log(allListings);

    res.render("listings/index.ejs", {
  allListings,
  q: "",
  location: "",
  minPrice: "",
  maxPrice: "",
  minRating: ""
});
});


module.exports = router;