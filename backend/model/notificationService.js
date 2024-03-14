const mongoose = require('mongoose');

const weatherNotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  message: { type: String }, 
  time: { type: String },
  emails:  [{type: String }], 
  isActive: { type: Boolean, default: true },
  dayOfWeek: { type: Number, default: 1 }, 
}, { timestamps: true });

module.exports = mongoose.model('WeatherNotification', weatherNotificationSchema);
