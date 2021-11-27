const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers.js');

router.get('/register', usersController.create)
router.get('/login', usersController.login)
router.get('/profile', usersController.profile)

module.exports = router;