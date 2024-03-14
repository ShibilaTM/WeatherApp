const mongoose = require('mongoose');

const weatherNotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
  message: { type: String }, // Notification message
  time: { type: String }, // Notification time
  emails: [{ type: String }], // Array of email addresses to send notifications
  isActive: { type: Boolean, default: true }, // Whether the notification is active or not
  dayOfWeek: { type: Number, default: 1 }, // Day of the week to send notifications (1 for Monday, 2 for Tuesday, and so on)
}, { timestamps: true });

module.exports = mongoose.model('WeatherNotification', weatherNotificationSchema);
