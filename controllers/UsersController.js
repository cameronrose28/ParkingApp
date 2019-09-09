const passport = require("passport");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const log = require ("../controllers/LogController")
const generator = require('generate-password')
const sgMail = require('@sendgrid/mail');
const siteemail = require ("../controllers/SiteConfigController").GetSiteEmail

exports.DummyData = (req, res) => {
  const user = new User({
    email: "Bob.Dole@test.com.au",
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
  User.findOne({email: req.body.username})
  .then((existinguser) => {
    if (existinguser) {
      res.status(409).render("newuser", {error_msg: "User Already Exists"})
    } else {
      var userpassword = generator.generate({
        length: 10,
        numbers: true
    });
    bcrypt.hash(userpassword, 10, function(err, hash) {
      if (err) {
         throw err;
      }
      const user = new User({
        email: req.body.username,
        name: req.body.name,
        password: hash,
        role: req.body.role
      });
    
      user
        .save()
        .then(
          () => {
            msg = {
              to: req.body.username,
              from: 'test@ipark.com.au',
              subject: 'Sending with Twilio SendGrid is Fun',
              text: 'and easy to do anywhere, even with Node.js',
              html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          };
          sgMail.send(msg);
        },
          log.PostLog("SUCCESS", `User ${req.body.username} created Successfully`),

          res.status(200).render("newuser", {success_msg: `User ${req.body.username} created Successfully`}))
        .catch(err => console.log(err));
   
    });
  }
  })
};

exports.UsersList = (req, res) => {
  User.find({}, {name : 1}, (error, User) => {
    if(error) { return handleError(res, err); }
    res.json(User)
  });
};


exports.Testmail = (req,res) => {
  console.log(siteemail)
  const msg = {
    to: 'marko.jurcic2@gmail.com',
    from: "test@ipark.com.au",
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  res.send("Success")
}