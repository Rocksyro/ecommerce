const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/img/products'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer ({ storage }); 

router.get('/', productsController.list);
router.get('/create', productsController.create);
router.post('/', [
    body('name').notEmpty(),
    body('price').isNumeric(),
    body('description').isLength({ min: 15 }),
    body('image').notEmpty(),
    body('category').notEmpty(),
], uploadFile.single("image"), productsController.store);

router.get('/:id', productsController.detail);
router.delete('/:id', productsController.delete);

/*router.get('/create', productsController.create);
router.post('/create', uploadFile.single('image'), productsController.store);
router.get('/cart', productsController.cart);
router.get('/search', productsController.search);
*/

module.exports = router;