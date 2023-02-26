const express = require("express");

const {
  loginUser,
  signupUser,
  getMe,
} = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// login route
router.post("/login", loginUser);

// sign up route
router.post("/signup", signupUser);

// me route
router.get("/me", verifyToken, getMe);

module.exports = router;
