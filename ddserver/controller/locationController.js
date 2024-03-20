// backend/controllers/locationController.js

const calculateDistance = require('../utils/distanceCalculator');

// Assuming you have access to user1 and user2 latitude and longitude
const user1 = { latitude: 37.7749, longitude: -122.4194 };
const user2 = { latitude: 34.0522, longitude: -118.2437 };

const distance = calculateDistance(user1.latitude, user1.longitude, user2.latitude, user2.longitude);
console.log('Distance between user1 and user2:', distance, 'km');
