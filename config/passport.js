const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/UserModel')
const bcrypt = require ('bcrypt')

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, (email, password, done) => {
    Users.findOne({ email: email.toLowerCase() })
      .then((userrecord) => {
        if(!userrecord) {
          return done(null, false, { message: 'email or password is invalid' });
        };
        bcrypt.compare(password, userrecord.password, function(err, isMatch) {
          if(err) throw err;
          if (!isMatch) {
            return done(null, false, { message: 'email or password is invalid' });
          };
          return done(null, userrecord);
        })}).catch(done);
  }));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  
  Users.findById(id, function(err, user) {
    done(err, user);
  });
});

}


