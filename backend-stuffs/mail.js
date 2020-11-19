require("dotenv").config();

const sendMail = (email) => {
  // mailer
  ("use strict");
  const nodemailer = require("nodemailer");

  async function main() {
    let transporter = nodemailer.createTransport({
      name: "example.com",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      // service: "gmail",
      sendMail: true,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "freelancer.me.yog@gmail.com", // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    });

    const html = `
        <h2>Thank You For Connecting I Really Appriciate Your Efforts.</h2>
        <h3>I will connect with you as soon as possible.</h3>
    `;

    let info = await transporter.sendMail({
      from: "yogsharma@no-reply.com",
      to: email,
      subject: "Thank You",
      text: "Thank You For Connecting I Really Appriciate Your Efforts",
      html: html,
    });

    let info1 = await transporter.sendMail({
      from: "Yog Sharma", // sender address
      to: "yogthesharma@gmail.com", // list of receivers
      subject: "New Connection Request", // Subject line
      text: `The with email Id ${email} tried to connect.`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
};

module.exports = sendMail;
