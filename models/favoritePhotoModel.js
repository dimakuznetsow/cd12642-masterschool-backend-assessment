const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favoritePhotosSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FavoritePhotos", favoritePhotosSchema);
