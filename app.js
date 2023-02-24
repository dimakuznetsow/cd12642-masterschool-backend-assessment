require("dotenv").config();

const express = require("express");

// express app
const app = express();

// port number
const port = process.env.PORT || 3003;

// middleware
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Unsplash API!" });
});

// server configuration
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
