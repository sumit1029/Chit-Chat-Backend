const express = require('express');
const { registerUser, authUser, allUsers, userDetails } = require('../controllers/userControllers');
const protect = require('../middleware/authMiddleware');

const router = express.Router()

router.route('/').post(registerUser).get(protect, allUsers);
router.post('/login', authUser) 
router.route('/info').post(protect, userDetails)

module.exports = router;
