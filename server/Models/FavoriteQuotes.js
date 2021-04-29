const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteQuotesSchema = new Schema (
  {
    body: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);

module.exports = FavoriteQuotes = mongoose.model('FavoriteQuote', FavoriteQuotesSchema);