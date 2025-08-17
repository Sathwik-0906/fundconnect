const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// ... (your existing registerUser and loginUser functions are here) ...

// @desc    Get current user's data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  // We already fetched the user in the middleware, so we can just send it back.
  res.status(200).json(req.user);
};

// Function to generate a JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Make sure to export the new function
module.exports = {
  registerUser,
  loginUser,
  getMe, // <-- EXPORT the new getMe function
};