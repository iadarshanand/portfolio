const express = require("express");
const { sendMail } = require("./controllers/sendMail");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World");
});
app.post("/api/v1/send_mail", sendMail);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
