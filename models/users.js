// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  name: String,
  profilePhoto: String,
  profileLink: String,
});

module.exports = mongoose.model('User', userSchema);
