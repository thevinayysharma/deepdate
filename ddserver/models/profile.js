// models/profile.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  profilePic: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
