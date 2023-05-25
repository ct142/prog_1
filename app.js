const express = require("express");
const app = express();

// Set the static folder
app.use(express.static("public"));

// Home route
app.get("/", function (req, res) {
  // Your work starts here
});

// Randomize route
// Your work starts here

// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
