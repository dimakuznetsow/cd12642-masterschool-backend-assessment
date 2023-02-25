require("dotenv").config();

const express = require("express");

const photoRoutes = require("./routes/photoRoutes");

// express app
const app = express();

// port number
const port = process.env.PORT || 3003;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", photoRoutes);

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to the Unsplash API!" });
// });

// server configuration
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
