import React, { useState } from "react";
import axios from "axios";
import "./NotificationForm.css"; 

const NotificationForm = () => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationTime, setNotificationTime] = useState("");
  const [notificationEmails, setNotificationEmails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/notification/preferences", {
        message: notificationMessage,
        time: notificationTime,
        emails: notificationEmails,
    });
    
      alert("Notification preferences saved successfully!");
    } catch (error) {
      console.error("Error saving notification preferences:", error);
      alert("Failed to save notification preferences. Please try again.");
    }
  };

  return (
    <div className="notification-form-container">
      <h2>Notification Preferences</h2>
      <form onSubmit={handleSubmit} className="notification-form">
        <div className="form-group">
          <label htmlFor="notificationMessage">Notification Message:</label>
          <input
            type="text"
            id="notificationMessage"
            value={notificationMessage}
            onChange={(e) => setNotificationMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notificationTime">Notification Time:</label>
          <input
            type="text"
            id="notificationTime"
            value={notificationTime}
            onChange={(e) => setNotificationTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notificationEmails">Notification Emails:</label>
          <input
            type="text"
            id="notificationEmails"
            value={notificationEmails}
            onChange={(e) => setNotificationEmails(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NotificationForm;

