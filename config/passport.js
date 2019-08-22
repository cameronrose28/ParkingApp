const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/UserModel')
const bcrypt = require ('bcrypt')

/* module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
      // Match user
      Users.findOne({
        username: username
      }).then(user => {
        if (!user) {
          return done(null, false, { message: "Incorrect Email" });
        }
			return done(null, user);
      }).catch(console.log("err?"));
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    
    Users.findById(id, function(err, user) {
      done(err, user);
    });
  });
}; */

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, (username, password, done) => {
    Users.findOne({ username: username.toLowerCase() })
      .then((userrecord) => {
        if(!userrecord) {
          console.log("Der?")
          return done(null, false, { errors: { 'user or password': 'is invalid' } });
        };
        bcrypt.compare(password, userrecord.password, function(err, isMatch) {
          if(err) throw err;
          if (!isMatch) {
            return done(null, false, { errors: { 'user or password': 'is invalid' } });
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
