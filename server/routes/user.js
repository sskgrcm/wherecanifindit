const express = require('express');
const router = express.Router;

const userController = require('../controllers/user');

// Profile details
router.get('/profile',
    userController.ensureAuthenticated,
    userController.getProfile);

