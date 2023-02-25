//Require axios to make API calls
const axios = require("axios");

const apiUrl = process.env.UNSPLASH_URI;
const accessKey = process.env.UNSPLASH_ACCESS_KEY;

// get all raw Unsplash photo URLs
const getPhotos = async (req, res) => {
  try {
    const response = await axios.get(
      `${apiUrl}/photos/?client_id=${accessKey}`
    );
    const data = response.data;
    const photoUrls = data.map((d) => d.urls.raw);
    res.status(200).json(photoUrls);
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

//get a single photo object
const getPhotoById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `${apiUrl}/photos/${id}?client_id=${accessKey}`
    );
    const photo = response.data;
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  getPhotos,
  getPhotoById,
};
