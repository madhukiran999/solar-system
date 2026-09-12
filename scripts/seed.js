// scripts/seed.js
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/solar_system?authSource=admin";

const planetSchema = new mongoose.Schema({
    name: String,
    id: Number,
    description: String,
    image: String,
    velocity: String,
    distance: String
});
const Planet = mongoose.model("planets", planetSchema);

const planets = [
  { id: 1, name: "Mercury", description: "Closest planet to Sun", image: "", velocity: "47.87 km/s", distance: "57.9 million km" },
  { id: 2, name: "Venus", description: "Second planet from Sun", image: "", velocity: "35.02 km/s", distance: "108.2 million km" },
  { id: 3, name: "Earth", description: "Our home planet", image: "", velocity: "29.78 km/s", distance: "149.6 million km" },
  { id: 4, name: "Mars", description: "Red Planet", image: "", velocity: "24.07 km/s", distance: "227.9 million km" },
  { id: 5, name: "Jupiter", description: "Gas giant", image: "", velocity: "13.07 km/s", distance: "778.5 million km" },
  { id: 6, name: "Saturn", description: "Ringed planet", image: "", velocity: "9.69 km/s", distance: "1.43 billion km" },
  { id: 7, name: "Uranus", description: "Ice giant", image: "", velocity: "6.81 km/s", distance: "2.87 billion km" },
  { id: 8, name: "Neptune", description: "Farthest planet", image: "", velocity: "5.43 km/s", distance: "4.5 billion km" }
];

async function seed() {
  await mongoose.connect(uri, {
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await Planet.deleteMany({});
  await Planet.insertMany(planets);
  console.log("✅ Database seeded with planets");

  await mongoose.disconnect();
}

seed();