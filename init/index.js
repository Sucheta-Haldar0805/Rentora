const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const axios = require("axios");
require("dotenv").config();

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {

  await Listing.deleteMany({});

  const updatedData = [];

  for (let obj of initData.data) {

    const locationQuery = `${obj.location}, ${obj.country}`;

    try {

      const geoRes = await axios.get(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(locationQuery)}.json?key=${process.env.MAPTILER_API_KEY}`
      );

      const coords =
        geoRes.data.features[0]?.geometry?.coordinates || [77.2090, 28.6139];

      updatedData.push({
        ...obj,
        owner: "69d8811a4a77d320ae89e974",
        geometry: {
          type: "Point",
          coordinates: coords,
        },
      });

      console.log(`Added coordinates for ${locationQuery}`);

    } catch (err) {

      console.log(`Failed for ${locationQuery}`);

      updatedData.push({
        ...obj,
        owner: "69d8811a4a77d320ae89e974",
        geometry: {
          type: "Point",
          coordinates: [77.2090, 28.6139],
        },
      });
    }
  }

  await Listing.insertMany(updatedData);

  console.log("data was initialized");

  mongoose.connection.close();
};

initDB();