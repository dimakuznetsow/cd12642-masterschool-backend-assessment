require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const photoRoutes = require("./routes/photoRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const userRoutes = require("./routes/userRoutes");

// express app
const app = express();

// port number
const port = process.env.PORT || 3003;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Unsplash API!" });
});
app.use("/", photoRoutes);
app.use("/", favoritesRoutes);
app.use("/api/user/", userRoutes);

// server configuration
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Failed to connect to MongoDB", error));
