const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);

/*
app.get('/cart', productController.cart);
app.get('/products', productController.list);
app.get('/products/:id', productController.detail);
*/

module.exports = router;