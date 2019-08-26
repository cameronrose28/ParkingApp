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
    failureRedirect: "/",
    failureFlash: true
  })(req, res, next);
};

exports.UserRegister = (req,res) => {
  User.findOne({username: req.body.username})
  .then((existinguser) => {
    if (existinguser) {
      res.status(409).render("newuser", {error_msg: "User Already Exists"})
    } else {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if (err) {
         throw err;
      }
      const user = new User({
        username: req.body.username,
        name: req.body.name,
        password: hash,
        permissionGroup: req.body.permissionGroup
      });
    
      user
        .save()
        .then(res.status(409).render("newuser", {success_msg: `User ${req.body.username} created Successfully`}))
        .catch(err => console.log(err));
   
    });
  }
  })
};


