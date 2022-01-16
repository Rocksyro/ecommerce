const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers.js');
const multer = require('multer');
const path = require('path');

const { body } = require ('express-validator');
const validations = [
    body('name').isLength({min: 6}).withMessage('El nombre debe tener al menos 6 caracteres'),
    body('email').isEmail().withMessage('El email no es válido'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
]

const storage = multer.diskStorage({ //permite configurar el disco de almacenamiento donde se van a subir los archivos
    destination: (req, file, cb) => {
        cb(null, './public/img/users'); //path.resolve(__dirname, '../public/img/users')
    },
    filename: (req, file, cb) => {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const uploadFile = multer({ storage });

router.get('/register', usersController.create)
router.post('/register', uploadFile.single('avatar'), validations, usersController.store)// en el single va el nombre del input de img en el form
router.get('/login', usersController.login)
router.get('/profile', usersController.profile)
router.get('/edit/:id', usersController.edit)
//router.put('/profile/:id/update', usersController.update)
module.exports = router;