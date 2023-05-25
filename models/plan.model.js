const { mongoose } = require("../db/mongoose");

// Define the meal schema
const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dayOfWeek: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    required: true
  },
  mealType: {
    type: String,
    enum: ["FOOD", "DRINK"],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

// Define the plan schema
const planSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  meals: {
    type: [mealSchema],
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Create the plan model, REPLACE <sid> WITH YOUR STUDENT ID
const Plan = mongoose.model("s3927178", planSchema);

module.exports = Plan;
