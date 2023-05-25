const express = require("express");
const Plan = require("./models/plan.model");
const app = express();

// Set the static folder
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Home route
app.get("/", async (req, res) => {
  try {
    const data = await Plan.aggregate([{ $sample: { size: 1 } }]);
    res.render('index', { data });
  } catch (error) {
    // Handle any errors that occur
    res.status(500).send('Internal Server Error');
  }
});

app.post("/", async (req, res) => {
  try {
    const data = await Plan.aggregate([{ $sample: { size: 1 } }]);
    res.render('index', { data });
  } catch (error) {
    // Handle any errors that occur
    res.status(500).send('Internal Server Error');
  }
})
// Randomize route
// Your work starts here

// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
