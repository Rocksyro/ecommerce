const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/search', productsController.search);

module.exports = router;