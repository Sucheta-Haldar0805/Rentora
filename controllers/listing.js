const Listing = require("../models/listing");
const axios = require("axios"); 


module.exports.index = async (req, res) => {

    let { q, minPrice, maxPrice, minRating } = req.query;

    let filter = {};


    // Search title, location, country
    if(q) {

        filter.$or = [
            { title: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } }
        ];

    }


    // Minimum price
    if(minPrice) {

        filter.price = {
            ...filter.price,
            $gte: Number(minPrice)
        };

    }


    // Maximum price
    if(maxPrice) {

        filter.price = {
            ...filter.price,
            $lte: Number(maxPrice)
        };

    }


    // Rating filter
    if(minRating) {

        filter.rating = {
            $gte: Number(minRating)
        };

    }


    const listings = await Listing.find(filter).populate("reviews");;


    res.render("listings/index.ejs", {
        listings,
        q,
        minPrice,
        maxPrice,
        minRating
    });

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


const features = geoRes.data.features;
if (!features || features.length === 0) {
  req.flash("error", "Location not found. Please enter a valid location.");
  return res.redirect("/listings/new");
}
const coords = features[0].geometry.coordinates;

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

module.exports.filterCategory = async (req, res) => {
    const { category } = req.params;

    const listings = await Listing.find({ category })
    .populate("reviews");

    res.render("listings/index.ejs", {
        listings,
        q: "",
        minPrice: "",
        maxPrice: "",
        minRating: ""
    });
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
/*
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
};*/

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  const { location, country } = req.body.listing;

  // Re-geocode on update
  const geoRes = await axios.get(
    `https://api.maptiler.com/geocoding/${encodeURIComponent(location + ", " + country)}.json?key=${process.env.MAPTILER_API_KEY}`
  );

  const features = geoRes.data.features;
  let coords = [0, 0];
  if (features && features.length > 0) {
    coords = features[0].geometry.coordinates;
  }

  let listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
    geometry: { type: "Point", coordinates: coords }
  }, { new: true });

  if (typeof req.file !== "undefined") {
    listing.image = { url: req.file.path, filename: req.file.filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};
module.exports.destroyListing = async(req,res) => {
    let { id } = req.params;
     let deleted = await Listing.findByIdAndDelete(id);
     console.log(deleted);
     req.flash("success" , "Listing Deleted!");
     res.redirect("/listings");
};

