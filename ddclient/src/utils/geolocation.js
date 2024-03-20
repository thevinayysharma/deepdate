// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [otherUsersLocations, setOtherUsersLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await axios.get('http://localhost:3001/locations');
      setOtherUsersLocations(response.data);
    };

    fetchLocations();
  }, []);

  const handleShareLocation = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          await axios.post('http://localhost:3001/location', {
            userId: 'currentUserId', // Replace with actual user ID
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported');
    }
  };

  return (
    <div>
      <button onClick={handleShareLocation}>Share Location</button>
      {latitude && longitude && (
        <p>Your current location: {latitude}, {longitude}</p>
      )}
      <h2>Other Users' Locations</h2>
      <ul>
        {otherUsersLocations.map((location, index) => (
          <li key={index}>
            User {index + 1}: {location.latitude}, {location.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
