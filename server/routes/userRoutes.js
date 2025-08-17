const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // <-- IMPORT the middleware

// Public routes (anyone can access)
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private route (only logged-in users can access)
router.get('/me', protect, getMe); // <-- ADD this new protected route

module.exports = router;