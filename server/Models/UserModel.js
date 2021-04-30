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
      // default: false
    },
    password: {
      type: String,
      required: true
    },
    third_party_auth: [ThirdPartyProviderSchema],
    // progress: new Schema(
    //   {
    //     level: Number,
    //     lastLevelDays: Number,
    //     totalDays: Number,
    //     lastSubmission: Number
    //   }
    // ),
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
    ],
    // progress: [ProgressSchema]
    progress: {
      level: Number,
      lastLevelDays: Number,
      totalDays: Number,
      // lastSubmission: { type: Date, default: Date.now}
      lastSubmission: Number
    }
  },
  { strict: false }
);

let ProgressSchema = new Schema(
  {
    level: Number,
    lastLevelDays: Number,
    totalDays: Number,
    lastSubmission: Number
  }
)

let Progress = mongoose.model('Progress', ProgressSchema);
module.exports = User = mongoose.model('User', UserSchema);

// module.exports = {
//   User,
//   Progress
// }