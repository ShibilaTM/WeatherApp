const express = require('express');
const router = express.Router();
const cors = require('cors');
const cron = require('cron'); // Import the cron module
const { sendWeatherNotification } = require('../model/notificationService');

router.use(cors());
require('dotenv').config();

let notificationPreferences = [];

router.post("/notification/preferences", (req, res) => {
  const { message, time, emails } = req.body;
  notificationPreferences.push({ message, time, emails });
  res.sendStatus(200);
});

// Define the cron job outside the route handler
const job = new cron.CronJob("0 12 * * 1-6", async () => {
  notificationPreferences.forEach(async (pref) => {
    try {
      const weatherData = await fetchWeatherData(pref.location); // Implement this function to fetch weather data
      const notificationMessage = generateNotificationMessage(
        weatherData,
        pref.message
      );
      await sendWeatherNotification(pref.emails, notificationMessage);
    } catch (error) {
      console.error("Error sending weather notification:", error);
    }
  });
});

// Start the cron job
job.start();

module.exports = router;
