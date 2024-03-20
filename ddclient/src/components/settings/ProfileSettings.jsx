import React, { useState } from 'react';
import './ProfileSettings.css'; // Import CSS for styling

const ProfileSettings = () => {
  const [bio, setBio] = useState('');
  const [photos, setPhotos] = useState([]);
  const [preferences, setPreferences] = useState('');
  const [location, setLocation] = useState('');

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlePhotosChange = (event) => {
    // Logic to handle photo upload
  };

  const handlePreferencesChange = (event) => {
    setPreferences(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit profile settings to backend
  };

  return (
    <div className="profile-settings-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" value={bio} onChange={handleBioChange} />
        </div>
        <div className="form-group">
          <label htmlFor="photos">Photos:</label>
          <input type="file" id="photos" onChange={handlePhotosChange} multiple />
        </div>
        <div className="form-group">
          <label htmlFor="preferences">Preferences:</label>
          <input type="text" id="preferences" value={preferences} onChange={handlePreferencesChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;

