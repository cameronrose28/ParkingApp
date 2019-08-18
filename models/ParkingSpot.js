const mongoose = require('mongoose');

const ParkingSpotSchema = new mongoose.Schema({
    Spot: {
        type: String,
        required: true
    },
    Owner: {
        type: String,
        required: false
    }
})

const ParkingSpot = mongoose.model("ParkingSpot", ParkingSpotSchema)

module.exports = ParkingSpot;