//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");

const mongoose = require("mongoose");

const FavoritePhotos = require("../models/favoritePhotoModel");

// get all favorites
const getAllFavorites = async (req, res) => {
  try {
    const user_id = req.user._id;
    const favorites = await FavoritePhotos.find({ user_id });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// // add photo to favorites
const addPhoto = async (req, res) => {
  const { url, description, username, explanation } = req.body;

  if (!explanation) {
    return res.status(404).json({ error: "Please provide explanation" });
  }

  try {
    const user_id = req.user._id;

    const photo = await FavoritePhotos.create({
      user_id,
      url,
      description,
      username,
      explanation,
    });
    res.status(200).json(photo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete photo from favorites
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "id not valid" });
  }
  const photo = await FavoritePhotos.findOneAndDelete({ _id: id });
  console.log("photo:", photo);

  if (!photo) {
    return res.status(404).json({ error: "Photo not found" });
  }

  res.status(200).json(photo);
};

// edit description of favorite
const updateExplanation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "id not valid" });
  }
  const { explanation } = req.body;
  const favorite = await FavoritePhotos.findOneAndUpdate(
    { _id: id },
    { explanation }
  );

  if (!favorite) {
    return res.status(404).json({ error: "Photo not found" });
  }
  res.status(200).json(favorite);
};

module.exports = {
  addPhoto,
  getAllFavorites,
  deletePhoto,
  updateExplanation,
};
