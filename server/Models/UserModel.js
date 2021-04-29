import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  journalEntries: [

  ],
  favoriteQuotes: new Schema
})