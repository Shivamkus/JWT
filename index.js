const express = require("express");
const jwt = require("jsonwebtoken");
const router = require("./routes");
const bodyParser = require("body-parser");
const PORT =  process.env.PORT || 5500;
const app = express();
require('dotenv').config();
require('./config/db');

app.get("/", (req, res) => {
  return res.json({
    msg: "Api is working",
  });
});

app.use(bodyParser.json());
app.use('/api/v1',  router)

app.listen(PORT, (err) => {
  if (err) {
    console.log("error on running server");
  } else {
    console.log(`server is running on PORT : ${PORT} ✅✅`);
  }
});
