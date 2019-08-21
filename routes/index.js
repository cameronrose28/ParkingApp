const express = require("express");

const router = express.Router();


//Importing Controller
const ParkingSpotController = require("../controllers/ParkingSpotController")
const SiteConfigController = require("../controllers/SiteConfigController")
const UsersController = require('../controllers/UsersController')
const Passport = require ('../config/passport')

router.get("/", (req, res) => {
  if(req.isAuthenticated()){
    res.send(`logged in as ${req.user.username}`);
    console.log(req.isAuthenticated())
  }else{
    res.send("not logged in");
    console.log(req.isAuthenticated())
  }
  
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/test", UsersController.DummyData)

router.post("/testpost", SiteConfigController.PostSiteConfig)

router.post('/validatelogin', UsersController.login)

module.exports = router;