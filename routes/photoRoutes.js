const express = require("express");
const {
  getPhotos,
  getPhotoById,
  getPhotosByUser,
} = require("../controllers/photoController");

const router = express.Router();

// route to return all photos
router.get("/api/photos", getPhotos);

// route to return a single photo by id
router.get("/api/photos/:id", getPhotoById);

// route to return an array of a user's Unsplash photos
router.get("/api/photos/user/:username", getPhotosByUser);

module.exports = router;
