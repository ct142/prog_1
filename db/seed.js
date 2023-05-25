// Seed data for the meal plans
const plans = [
  {
    id: 1,
    name: "Weekly Meal Plan #1",
    meals: [
      {
        name: "Banana Pancakes",
        dayOfWeek: "Monday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?banana,pancakes",
      },
      {
        name: "Iced Coffee",
        dayOfWeek: "Tuesday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?coffee,ice",
      },
      {
        name: "Grilled Chicken Salad",
        dayOfWeek: "Wednesday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?chicken,salad",
      },
      {
        name: "Strawberry Smoothie",
        dayOfWeek: "Thursday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?strawberry,smoothie",
      },
      {
        name: "Baked Fish with Lemon and Herbs",
        dayOfWeek: "Friday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?baked,fish",
      },
      {
        name: "Green Tea",
        dayOfWeek: "Saturday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?green,tea",
      },
      {
        name: "Grilled Steak with Chimichurri Sauce",
        dayOfWeek: "Sunday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?steak,chimichurri",
      },
    ],
  },
  {
    id: 2,
    name: "Weekly Meal Plan #2",
    meals: [
      {
        name: "Avocado Toast",
        dayOfWeek: "Monday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?avocado,toast",
      },
      {
        name: "Mango Lassi",
        dayOfWeek: "Tuesday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?mango,lassi",
      },
      {
        name: "Pesto Pasta",
        dayOfWeek: "Wednesday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?pesto,pasta",
      },
      {
        name: "Lemonade",
        dayOfWeek: "Thursday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?lemonade",
      },
      {
        name: "Beef Stew",
        dayOfWeek: "Friday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?beef,stew",
      },
      {
        name: "Orange Juice",
        dayOfWeek: "Saturday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?orange,juice",
      },
      {
        name: "Roasted Chicken",
        dayOfWeek: "Sunday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?roasted,chicken",
      },
    ],
  },
  {
    id: 3,
    name: "Weekly Meal Plan #3",
    meals: [
      {
        name: "Blueberry Pancakes",
        dayOfWeek: "Monday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?blueberry,pancakes",
      },
      {
        name: "Matcha Latte",
        dayOfWeek: "Tuesday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?matcha,latte",
      },
      {
        name: "Stir-Fry Vegetables with Tofu",
        dayOfWeek: "Wednesday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?stir-fry,tofu",
      },
      {
        name: "Watermelon Juice",
        dayOfWeek: "Thursday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?watermelon,juice",
      },
      {
        name: "Beef Tacos",
        dayOfWeek: "Friday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?beef,tacos",
      },
      {
        name: "Iced Tea",
        dayOfWeek: "Saturday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?iced,tea",
      },
      {
        name: "Shrimp Scampi",
        dayOfWeek: "Sunday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?shrimp,scampi",
      },
    ],
  },
  {
    id: 4,
    name: "Weekly Meal Plan #4",
    meals: [
      {
        name: "Omelette",
        dayOfWeek: "Monday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?omelette",
      },
      {
        name: "Strawberry Smoothie",
        dayOfWeek: "Tuesday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?strawberry,smoothie",
      },
      {
        name: "Grilled Cheese Sandwich",
        dayOfWeek: "Wednesday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?grilled,cheese",
      },
      {
        name: "Pineapple Juice",
        dayOfWeek: "Thursday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?pineapple,juice",
      },
      {
        name: "Spaghetti Carbonara",
        dayOfWeek: "Friday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?spaghetti,carbonara",
      },
      {
        name: "Mojito",
        dayOfWeek: "Saturday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?mojito",
      },
      {
        name: "Beef Stir Fry",
        dayOfWeek: "Sunday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?beef,stir-fry",
      },
    ],
  },
  {
    id: 5,
    name: "Weekly Meal Plan #5",
    meals: [
      {
        name: "Bagel and Cream Cheese",
        dayOfWeek: "Monday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?bagel,cream-cheese",
      },
      {
        name: "Orange Juice",
        dayOfWeek: "Tuesday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?orange,juice",
      },
      {
        name: "Tuna Salad",
        dayOfWeek: "Wednesday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?tuna,salad",
      },
      {
        name: "Lemonade",
        dayOfWeek: "Thursday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?lemonade",
      },
      {
        name: "Chicken Curry",
        dayOfWeek: "Friday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?chicken,curry",
      },
      {
        name: "Chai Latte",
        dayOfWeek: "Saturday",
        mealType: "DRINK",
        imageUrl: "https://source.unsplash.com/800x600/?chai,latte",
      },
      {
        name: "Roast Beef",
        dayOfWeek: "Sunday",
        mealType: "FOOD",
        imageUrl: "https://source.unsplash.com/800x600/?roast,beef",
      },
    ],
  },
];

const Plan = require("./plan.model");

// Delete the collection if it exists
Plan.collection
  .drop()
  .then(() => {
    console.log("Current plans are removed!");

    // Then insert data
    Plan.insertMany(plans)
      .then(() => {
        console.log("New plans are saved!");
        process.exit();
      })
      .catch((error) => console.log(error.message));
  })
  .catch(() => console.log("Collection does not exist, so not"));
