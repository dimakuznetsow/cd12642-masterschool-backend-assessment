const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyToken = async (req, res, next) => {
  // get the authorization header from the request
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // extract the token from the authorization header
  const token = authHeader.startsWith("Bearer")
    ? authHeader.split(" ")[1]
    : null;

  if (!token) {
    return res.status(401).json({ message: "Invalid token provided" });
  }

  try {
    // verify the authenticity of the token using the JWT_SECRET
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

    // get the user associated with the decoded token by querying the database
    req.user = await User.findById(decoded._id);

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = {
  verifyToken,
};
