//bringing in models
const ParkingSpot = require("../models/ParkingSpot");

// Posts a single parking spot
exports.PostParkingSpot = (req, res) => {
  const parkingspot = new ParkingSpot({ Spot: "4B", Owner: "Bob" });

  parkingspot
    .save()
    .then(res.send("Success"))
    .catch(err => console.log(err));

// Gets a single parking
exports.GetParkingSpot = (req, res) => {
    res.send("test")
}

