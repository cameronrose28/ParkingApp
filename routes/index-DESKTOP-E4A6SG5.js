const express = require("express");

const router = express.Router();


//Importing Controller
const ParkingSpotController = require("../controllers/ParkingSpotController")
const SiteConfigController = require("../controllers/SiteConfigController")
const Passport = require ('../config/passport')

router.get("/", (req, res) => {
  res.send("Hi");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/test", SiteConfigController.GetSiteEmail)

router.post("/testpost", SiteConfigController.PostSiteConfig)

router.post('/validatelogin', Passport.SignIn)

module.exports = router;