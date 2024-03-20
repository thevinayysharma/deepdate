import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAnalytics = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/analytics/user');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user analytics:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Analytics</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Number of Users Matched: {userData?.matchedUsers}</p>
          <div>
            <h3>Geo-friend Data</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAnalytics;

