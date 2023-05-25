const { mongoose } = require("./mongoose");

// Define the meal schema
const mealSchema = new mongoose.Schema({
  // Your work starts here
});

// Define the plan schema
const planSchema = new mongoose.Schema({
  meals: {
    type: [mealSchema],
    required: true,
  },
  // Your work starts here
});

// Create the plan model, REPLACE <sid> WITH YOUR STUDENT ID
const Plan = mongoose.model("<sid>", planSchema);

module.exports = Plan;
