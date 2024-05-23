const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(`error on connecting database , ${err}`);
  });
