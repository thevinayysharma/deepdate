import React, { useState } from 'react';
import './EventListing.css'; // Import CSS for styling

const EventListing = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-listing-container">
      <div className="event-cards">
        {events.map((event, index) => (
          <div className="event-card" key={index} onClick={() => handleEventClick(event)}>
            <img src={event.image} alt={event.title} className="event-image" />
            <button className="look-for-friends-btn">Look for Friends</button>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <EventFriend event={selectedEvent} onClose={handleClose} />
      )}
    </div>
  );
};

const EventFriend = ({ event, onClose }) => {
  // This component will display user profile images and basic data
  return (
    <div className="event-friend-container">
      {/* Content for event friend component */}
      <button onClick={onClose} className="close-btn">Close</button>
    </div>
  );
};

export default EventListing;
