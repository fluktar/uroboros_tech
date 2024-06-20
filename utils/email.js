const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.uroboros.online",
  port: 587,
  secure: false,
  auth: {
    user: "office@uroboros.online",
    pass: "Sojokotojo1@3",
  },
});

const sendEmail = (params) => {
  const emailToSend = "office@uroboros.online";
  const mailOptions = {
    from: "office@uroboros.online",
    to: emailToSend,
    subject: `Message from ${params.name}`,
    text: `${params.message}\n\nSent by: ${params.email}`,
  };

  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = sendEmail;
