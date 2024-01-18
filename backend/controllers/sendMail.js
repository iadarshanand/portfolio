const nodemailer = require("nodemailer");
require("dotenv").config();
const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(200).json({
        status: false,
        message: "You must provide all fields",
      });
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "anandadarsh2511@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const infoMyself = await transporter.sendMail({
      from: '"Portfolio 👻" anandadarsh2511@gmail.com', // sender address
      to: `anandadarsh2511@gmail.com`, // list of receivers
      subject: "Contact through Portfolio", // Subject line
      text: `${name} Wants to reach you,\n\n Email: ${email} \n\n Message: ${message}`, // plain text body
      html: `
    <p><b>${name}</b> wants to reach you,</p>
    <p>Enail: ${email}</p>
    <p>Message: ${message}</p>
  `,
    });

    const info = await transporter.sendMail({
      from: '"Portfolio 👻" anandadarsh2511@gmail.com', // sender address
      to: `${email}`, // list of receivers
      subject: "Contact through Portfolio", // Subject line
      text: `Hello ${name},\n\nThank you for reaching out to me. I appreciate your interest. This is an automated response, and I will get back to you as soon as possible.\n\nBest regards,\nAdarsh Anand`, // plain text body
      html: `
    <p>Hello <b>${name}</b>,</p>
    <p>Thank you for reaching out to me. I appreciate your interest. This is an automated response, and I will get back to you as soon as possible.</p>
    <p>Best regards,<br>Adarsh Anand</p>
  `,
    });

    return res.status(200).json({
      status: true,
      message: "Your message mailed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { sendMail };
