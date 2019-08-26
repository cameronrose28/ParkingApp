const express = require("express");

const router = express.Router();


//Importing Controller
const ParkingSpotController = require("../controllers/ParkingSpotController")
const SiteConfigController = require("../controllers/SiteConfigController")
const UsersController = require('../controllers/UsersController')
const Passport = require ('../config/passport')
const Auth = require ('../config/isauth')

// Index route
router.get("/", Auth.ensureNotAuthenticated, (req, res) => {
  res.render("login");
});

// Home Route
router.get("/home", (req, res) => {
  res.render("home");
});

// Login Route
router.get("/dashboard", Auth.ensureAuthenticated, (req, res) => {
  res.render("index");
});

router.get("/test", UsersController.DummyData)

router.post("/testpost", Auth.ensureAuthenticated, SiteConfigController.PostSiteConfig)

// Check the login credentials against the database
router.post('/validatelogin', UsersController.login)

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get("/newuser", Auth.ensureAuthenticated, (req, res) => {
  res.render("newuser")
}) 

// Register new User
router.post("/RegisterNewUser", UsersController.UserRegister)

//Get All Parking Spots
router.get("/GetParkingSpots", ParkingSpotController.GetAllParkingSpots)

router.get("/SessionData", (req, res) => {
  console.log(req.user)
})

router.get("/siteconfig", Auth.ensureAuthenticated, SiteConfigController.GetSiteConfig)

router.post("/postsiteconfig", SiteConfigController.PostSiteConfig)
module.exports = router;
