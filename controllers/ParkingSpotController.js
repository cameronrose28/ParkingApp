//bringing in models
const ParkingSpot = require("../models/ParkingSpot");

// Posts a single parking spot
exports.PostParkingSpot = (req, res) => {
  const parkingspot = new ParkingSpot({ Spot: "4B", Owner: "Bob" });
  parkingspot
    .save()
    .then(res.send("Success"))
    .catch(err => console.log(err));
};

// Posts multiple parking spots
exports.PostManyParkingSpots = (req, res) => {

}

// Gets a single parking
exports.GetParkingSpot = (req, res) => {
  res.send("test");
};

// Gets all parking spots
exports.GetAllParkingSpots = (req, res) => {

}

// Deletes a single parking spot
exports.DeleteParkingSpot = (req, res) => {
  
}
 
