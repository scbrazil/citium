const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalSchema = new Schema (
  {
    created: {
      type: Date,
      default: Date.now,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }
);

module.exports = Journal = mongoose.model('Journal', JournalSchema);