const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "divyanshprajapat82@gmail.com",
    pass: "vaelivifnyvhnuqr",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
