const passport = require('passport');
const User = require('../models/UserModel')

exports.DummyData = (req, res) => {

    const user = new User({
        username: 'Bob.Dole',
        name: 'Bob Dole',
        password: 'derppy'
    });

    user.save()
        .then(res.send("Success"))
        .catch(err => console.log(err));
}

exports.login = (req, res, next) => {
    10YRSpassport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/home",
      })(req, res, next);
}