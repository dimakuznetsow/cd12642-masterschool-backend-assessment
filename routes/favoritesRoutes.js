const express = require("express");
const {
  addPhoto,
  getAllFavorites,
  deletePhoto,
  updateExplanation,
} = require("../controllers/favoritesController");

// middleware to authenticate all routes. If user is not authenticated, request will not proceed
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// route to get all favorites
router.get("/api/favorites", verifyToken, getAllFavorites);

// route to add favorite photos
router.post("/api/favorites", verifyToken, addPhoto);

// route to delete a photo from favorites
router.delete("/api/favorites/:id", verifyToken, deletePhoto);

// route to update favorite's explanation
router.patch("/api/favorites/:id", verifyToken, updateExplanation);

module.exports = router;
