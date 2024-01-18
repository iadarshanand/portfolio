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

    const info = await transporter.sendMail({
      from: `Portfolio Mail 😎 ${email}`, // sender address
      to: "anandadarsh2511@gmail.com", // list of receivers
      subject: "Contact through Portfolio", // Subject line
      text: `Hello Adarsh, ${name} wants to contact you.`, // plain text body
      html: `<p>${message}</p>`, // html body
    });

    return res.status(200).json({
      status: true,
      message: "Your message mailed successfully",
      info,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { sendMail };
