//bringing in models
const ParkingSpot = require("../models/ParkingSpot");

// Posts a single parking spot
exports.PostParkingSpot = (req, res) => {
  const parkingspot = new ParkingSpot({ Spot: "4B", Owner: "Bob" });

  parkingspot
    .save()
    .then(res.send("Success"))
    .catch(err => console.log(err));

<<<<<<< HEAD
// Gets a single parking
exports.GetParkingSpot = (req, res) => {
    res.send("test")
}

=======
  res.send("Der");
};
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4
