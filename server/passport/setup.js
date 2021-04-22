const bcrypt = require('bcryptjs');
const User = require('../models/UserModel.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// get user.id from the user object and stores it on the session object (req.session.passport.user)
passport.serializeUser((user, done) => {
  // console.log('this is the user in serialize: ', user)
  done(null, user.id);
});

// Suggested online, without user.id
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// uses set user.id and retrieves related object
// retrieved object is attached to the request object as req.user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, (req, email, password, done) => {
    User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const newUser = new User({ email, password });

        bcrypt.genSalt(12, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.password = hash;
            newUser.username = email;
            newUser
              .save()
              .then((user) => {
                return done(null, user);
              })
              .catch((err) => {
                return done(null, false, { message: err });
              });
          });
        });
      } else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Incorrect password' });
          }
        });
      }
    })
    .catch((err) => {
      return done(null, false, { message: err });
    });
  })
);

module.exports = passport;
