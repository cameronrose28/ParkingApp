const express = require("express");

const router = express.Router();


//Importing Controller
const ParkingSpotController = require("../controllers/ParkingSpotController")
const SiteConfigController = require("../controllers/SiteConfigController")
const UsersController = require('../controllers/UsersController')
const Passport = require ('../config/passport')

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

<<<<<<< HEAD
router.get("/test", UsersController.DummyData)

router.post("/testpost", SiteConfigController.PostSiteConfig)

router.post('/validatelogin', UsersController.login)
=======
// Test Route
router.get("/test", ParkingSpotController.PostParkingSpot);
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4

module.exports = router;
