const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN,
    pass: process.env.APP_PASSWORD,
  },
});

const sendEmail = async (pref, weatherData) => {
  try {
    const subject = `Weather Update`;
    const text = `Temperature: ${weatherData.temperature}, Humidity: ${weatherData.humidity},Visibility:${weatherData.visibility},Wind Speed:${weatherData.windSpeed} `; // Modify this to include all relevant weather data
    await transporter.sendMail({
      from: process.env.ADMIN,
      to: pref.emails.join(), 
      subject: subject,
      text: text
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
};


module.exports = sendEmail;

