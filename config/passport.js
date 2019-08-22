const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/UserModel')

module.exports = (passport) => {
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, done) => {
  Users.findOne({ username: username.toLowerCase() })
    .then((username) => {
      if(!username || !password) {
        return done(null, false, { message: "Incorrect Email" });
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


