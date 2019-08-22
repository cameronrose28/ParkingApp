const passport = require("passport");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.DummyData = (req, res) => {
  const user = new User({
    username: "Bob.Dole",
    name: "Bob Dole",
    password: "derppy"
  });

  user
    .save()
    .then(res.send("Success"))
    .catch(err => console.log(err));
};

exports.login = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/"
  })(req, res, next);
};

exports.UserRegister = (req,res) => {
  console.log(req.body)
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
       throw err;
    }
    const user = new User({
      username: req.body.username,
      name: req.body.name,
      password: hash
    });
  
    user
      .save()
      .then(res.send("Success"))
      .catch(err => console.log(err));
 
  });
};


