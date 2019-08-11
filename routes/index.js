const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;