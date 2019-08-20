const express = require("express");

const router = express.Router();

//Importing Controller
const ParkingSpotController = require("../controllers/ParkingSpotController");

// Index route
router.get("/", (req, res) => {
  res.render("index");
});

// Home Route
router.get("/home", (req, res) => {
  res.render("home");
});

// Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

// Test Route
router.get("/test", ParkingSpotController.PostParkingSpot);

module.exports = router;
