const router = require('express').Router();
require('dotenv').config();

// @desc    Display all users
// @route   get /user/all
// @access  Private
router.get('/all', async (req, res) => {
  try {
    const users = await User.find().select(['email firstName lastName journalEntries favoriteQuotes']);

    res.json(users);
  } catch (err) {
    res.status(404).send(err);
  }
})

// @desc    Get user by id
// @route   GET /users/:id
// @access  Public
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).populate(['email', 'firstName', 'lastName', 'journalEntries', 'favoriteQuotes']);

//     res.json(user);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// @desc    Get user by id
// @route   GET /user/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.send(user);
  } catch (err) {
    res.status(404).send(err);
  }
})




// @desc    Create new user
// @route   POST /user
// @access  Private
router.post('/user', async (req, res) => {
  // const { }
})

module.exports = router;