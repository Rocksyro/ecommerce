const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/products')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalName)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer ({ storage }); */

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/search', productsController.search);

/*router.get('/create', productsController.create);
router.post('/create', uploadFile.single('image'), productsController.store);
*/

module.exports = router;