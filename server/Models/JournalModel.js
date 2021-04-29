import mongoose, { Schema } from 'mongoose';

const JournalSchema = new Schema ({
  created: { type: Date, default: Date.now },
  body: String
});