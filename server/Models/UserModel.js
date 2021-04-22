const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThirdPartyProviderSchema = new Schema(
  {
    provider_name: {
      type: String,
      default: null
    },
    provider_id: {
      type: String,
      default: null
    },
    provider_data: {
      type: {},
      default: null
    }
  }
)

const UserSchema = new Schema(
  {
    username: {
      type: String,
      default: null,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    },
    third_party_auth: [ThirdPartyProviderSchema],
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    journalEntries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Journal'
      }
    ],
    favoriteQuotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quotes'
      }
    ]
  },
  { strict: false }
);

module.exports = User = mongoose.model('User', UserSchema);