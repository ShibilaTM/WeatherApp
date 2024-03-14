const express = require('express');
const router = express.Router();
const cors = require('cors');
const cron = require('cron'); 
const NotificationPreference = require('../model/notificationService');
const sendEmail = require('../utilities/emailService');
require('dotenv').config();

router.use(cors());
require('dotenv').config();

const fetchWeatherData = async (location) => {
  const apiKey = 'process.env.WEATHER_API_KEY'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

let notificationPreferences = [];


router.post("/notification/preferences", async (req, res) => {
  const { message, time, emails } = req.body;

  try {
    const preference = new NotificationPreference({ message, time, emails });
    await preference.save();
    
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving notification preference:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/send-weather-notifications', async (req, res) => {
  try {
    const preferences = await NotificationPreference.find();

    for (const pref of preferences) {
      try {
        const weatherData = await fetchWeatherData(pref.location);
        const notificationMessage = generateNotificationMessage(weatherData, pref.message);
        await sendEmail(pref.emails, 'Weather Update', notificationMessage);
      } catch (error) {
        console.error(`Error sending weather notification for preference ${pref._id}:`, error);
      }
    }

    res.status(200).json({ message: 'Weather notifications sent successfully' });
  } catch (error) {
    console.error('Error fetching notification preferences:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;



