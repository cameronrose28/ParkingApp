const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/UserModel')

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
    .then((username) => {
      if(!username || !password) {
        console.log("Der?")
        return done(null, false, { errors: { 'user or password': 'is invalid' } });
      }
      return done(null, username);
    }).catch(done);
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


