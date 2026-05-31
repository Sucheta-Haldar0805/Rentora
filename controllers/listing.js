const Listing = require("../models/listing");
const axios = require("axios"); // npm install axios

module.exports.index = async (req,res) => {
     const allListings = await Listing.find({});
     res.render("listings/index.ejs" , {allListings});
};

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate
    ({ path : "reviews" ,
       populate : {
        path : "author",
    }}).populate("owner");

    if(!listing){
         req.flash("error" , "Listing you request for does not exist!");
        return  res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing , mapToken: process.env.MAPTILER_API_KEY });
  }

module.exports.createListing = async (req, res) => {
  const { location, country } = req.body.listing;

  // Geocode the location using MapTiler API
  const geoRes = await axios.get(
    `https://api.maptiler.com/geocoding/${encodeURIComponent(location + ", " + country)}.json?key=${process.env.MAPTILER_API_KEY}`
  );

  const coords = geoRes.data.features[0]?.geometry?.coordinates || [0, 0];

  const newListing = new Listing({
    ...req.body.listing,
    owner: req.user._id,
    geometry: {
      type: "Point",
      coordinates: coords,  // [lng, lat] from MapTiler
    },
  });
  let url = req.file.path;
  let filename = req.file.filename;
  newListing.image = {url,filename};
  await newListing.save();
  req.flash("success", "New listing created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req,res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
     if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings"); 
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs" , {listing , originalImageUrl });
};
module.exports.updateListing = async(req,res) => {
     let {id} = req.params;
     let listing = await Listing.findByIdAndUpdate( id , {...req.body.listing});

     if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = { url , filename };
        await listing.save();
     }
     req.flash("success" , "Listing Updated!");
     res.redirect(`/listings/${id}`);
};
module.exports.destroyListing = async(req,res) => {
    let { id } = req.params;
     let deleted = await Listing.findByIdAndDelete(id);
     console.log(deleted);
     req.flash("success" , "Listing Deleted!");
     res.redirect("/listings");
};