const router = require('express').Router();

// @desc    Get journal entry by id
// @route   GET /journal/:id
// @access  Public
// note     Can be used to retrieve all user entries, one at a time. Efficiency?
router.get('/journal/:id', async (req, res) => {
  try {
    const entry = await Journal.findById(req.params.id).populate('created body user');

    res.json(entry);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    Get all journal entries by user
// @route   GET /journal/user
// @access  Public
// Likely not needed. Can use /:id to retrieve all references in User document.

// @desc    Get all journal entries by user by date
// @route   GET /journal/:date
// @access  Public
// Need to finish
router.get('/:date', async (req, res) => {
  const entries = mongoose.find({created:})
});

// @desc    Create new journal entry
// @route   POST /journal/:entry
// @access  Private
router.post('journal/:entry', async (req, res) => {
  const { created, body, user } = req.body;
  try {
    let newEntry = new Journal({ created, body, user });

    await newEntry.save();

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    Delete journal entry
// @route   DELETE /delete-entry/:id
// @access  Private
// @note    Can use to delete all user entries, one at a time. Efficiency?
router.delete('/delete-entry/:id', async (req, res) => {
  const { entryId } = req.body;
  try {
    const entry = await Journal.remove({ _id: req.params.id });

    res.sendStatus(202);
  } catch (err) {
    res.status(400).send(err);
  }
});