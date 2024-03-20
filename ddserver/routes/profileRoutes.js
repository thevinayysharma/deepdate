const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

// /*  CREATE PROFILE */  
router.post('/profile', async (req, res) => {
  try {
    const { name, location, profilePic } = req.body;
    const profile = new Profile({ name, location, profilePic });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing profile
router.post('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, profilePic } = req.body;

    const profile = await Profile.findByIdAndUpdate(
      id,
      { name, location, profilePic },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
