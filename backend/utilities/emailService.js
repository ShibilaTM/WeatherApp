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

const sendConfirmationEmail = async (userEmail, booking) => {
  const mailOptions = {
    from: {
      name: 'Weathe App',
      address: process.env.ADMIN,
    },
    to: [userEmail],
    subject: 'Weather Update',
    text: `Today the waeter is `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent');
    
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendConfirmationEmail,
};
