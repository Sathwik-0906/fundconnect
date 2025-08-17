const express = require('express');
const router = express.Router();
// Import both functions from the controller
const { registerUser, loginUser } = require('../controllers/userController');

// Define the registration route
router.post('/register', registerUser);

// Define the login route
router.post('/login', loginUser); // <-- ADD this new line

module.exports = router;