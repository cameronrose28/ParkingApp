const express = require("express");

const router = express.Router();

//Importing Controller
const ParkingSpotController = require("../controllers/ParkingSpotController")

router.get("/", (req, res) => {
  res.send("Hi");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/test", ParkingSpotController.PostParkingSpot)
  

module.exports = router;