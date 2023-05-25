const mongoose = require("mongoose");

// MongoDB Atlas connection string, replace this string with your own if needed
const mongoUrl =
  "mongodb+srv://cosc2430:yyL2BLIAcrU7PlmV@cluster0.a6lm4ra.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

module.exports = { mongoose };
