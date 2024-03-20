// Home.js
import React from "react";
import "./Home.css"; 
import Analytics from "./analytics/Analytics";
import ProfileSettings from "../settings/ProfileSettings";
import Events from "../events/EventListing";
import Messages from "../message/MessageComp";
import Notifications from "./Notifications"; 
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Icon of DeepDate</h1>
      <div className="home-content">
        <div className="analytics-section">
          <h2>Analytics</h2>
          <Analytics />
        </div>
        <div className="events-section">
          <h2>Events</h2>
          <Events />
        </div>
        <div className="profile-settings-section">
          <h2>Profile Settings</h2>
          <ProfileSettings />
        </div>
        {/* <div className="messages-section">
          <h2>Messages</h2>
          <Messages />
        </div> */}
        {/* <div className="notifications-section">
          <h2>Notifications</h2>
          <Notifications />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
