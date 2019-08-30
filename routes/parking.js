const express = require("express");

const router = express.Router();

const ParkingSpotController = require("../controllers/ParkingSpotController")
const Passport = require ('../config/passport')
const Auth = require ('../config/isauth')


//Get All Parking Spots
router.get("/GetParkingSpots", Auth.ensureAuthenticated, ParkingSpotController.GetAllParkingSpots)


module.exports = router;