const express = require('express');
const router = express.Router();
// const passport = require('passport');
const passport = require('../passport/setup.js');
const User = require('../models/UserModel.js');

// registration and login
router.post('/login', async (req, res, next) => {
  // console.log(req.query)
  // console.log('find response: ', User.findOne({ email: req.query.email }))
  await User.findOne({ email: req.query.email })
    .then((user) => {
      if (!user) {
        res.status(401).send('No account associated with this email.');
      } else {
        register_login(req, res, next, false);
      }
    })
    .catch((err) => console.error(err));
});

router.post('/register', async (req, res, next) => {
  console.log(req.query);
  User.findOne({ email: req.query.email })
    .then((user) => {
      if (user) {
        res.status(401).send('Account already registered with this email address.');
      } else {
        register_login(req, res, next, true);
      }
    })
    .catch((err) => console.error(err));
});

const register_login = async (req, res, next, isNewUser) => {
  passport.authenticate('local', function(err, user, info) {
    // console.log('this is auth info: ', info)
    if (err) {
      console.log('First error: ', err)
      return res.status(400).send({ errors: err });
    }
    if (!user && !isNewUser) {
      console.log('Second error: ', err)
      return res.status(400).send(info);
    }
    // await User.findOneAndUpdate({ email: req.body.email }, { $set { firstName: req.body.firstName, lastName: req.body.lastName}})
    req.logIn(user, async (err) => {
      if (err) {
        // console.log(user.id)
        console.log('Third error: ', err)
        return res.status(400).send(err);
      }
      // await User.findOneAndUpdate(
      //   { email: req.query.email },
      //   { firstName: req.query.firstName},
      //   { new: true }
      // );
      console.log(user);


      // return res.status(200).send({ success: `${user.id} logged in.` });
      return res.status(200).send(user);
    })
  })(req, res, next);
};

router.get('/logout', function (req, res) {
  req.logout();
  res.redirection('/');
});

module.exports = router;
