const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers.js');

router.get('/register', usersController.create)
router.post('/register', usersController.store)
router.get('/login', usersController.login)
router.get('/profile', usersController.profile)
router.get('/edit/:id', usersController.edit)
//router.put('/profile/:id/update', usersController.update)
module.exports = router;