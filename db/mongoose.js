const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://chauthang26:2rRJqlMShcrWD8gD@s3927178.yizo9n6.mongodb.net/s3927178?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

module.exports = { mongoose };


