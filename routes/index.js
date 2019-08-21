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

router.get("/test", UsersController.DummyData)

router.post("/testpost", SiteConfigController.PostSiteConfig)

// Check the login credentials against the database
router.post('/validatelogin', UsersController.login)

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
