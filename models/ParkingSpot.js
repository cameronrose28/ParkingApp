const mongoose = require("mongoose");

const ParkingSpotSchema = new mongoose.Schema({
  spot: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: false
  }
});

const ParkingSpot = mongoose.model("ParkingSpot", ParkingSpotSchema);

module.exports = ParkingSpot;
