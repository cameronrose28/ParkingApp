const express = require("express");

const router = express.Router();


//Importing Controller
<<<<<<< HEAD
const ParkingSpotController = require("../controllers/ParkingSpotController")
const SiteConfigController = require("../controllers/SiteConfigController")
const UsersController = require('../controllers/UsersController')
const Passport = require ('../config/passport')
=======
const ParkingSpotController = require("../controllers/ParkingSpotController");
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4

// Index route
router.get("/", (req, res) => {
<<<<<<< HEAD
  if(req.isAuthenticated()){
    res.send(`logged in as ${req.user.username}`);
    console.log(req.isAuthenticated())
  }else{
    res.send("not logged in");
    console.log(req.isAuthenticated())
  }
  
=======
  res.render("index");
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4
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
