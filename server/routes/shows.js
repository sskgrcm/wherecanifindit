const express = require('express');
const router = new express.Router();

const showsController = require('../controllers/shows');
const userController = require('../controllers/user');

// Shows home
router.get('/',
    userController.ensureAuthenticated,
    showsController.getHome);

module.exports = router;
