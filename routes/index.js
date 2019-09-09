const express = require("express");

const router = express.Router();


//Importing Controller
//const ParkingSpotController = require("../controllers/ParkingSpotController")
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
router.get("/dashboard", (req, res) => {
  res.render("index");
});

// Check the login credentials against the database
router.post('/validatelogin', UsersController.login)

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get("/newuser", (req, res) => {
  res.render("newuser")
}) 

// Register new User
router.post("/RegisterNewUser", UsersController.UserRegister)

router.get("/SessionData", (req, res) => {
  console.log(req.user)
})

//Gets List of Users
router.get("/userlist", UsersController.UsersList)

router.get("/siteconfig", SiteConfigController.GetSiteConfig)

router.post("/postsiteconfig", SiteConfigController.PostSiteConfig)

router.get("/testmail", UsersController.Testmail)

module.exports = router;
