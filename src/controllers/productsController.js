const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult } = require('express-validator');

const productsJSON = path.resolve(__dirname, '../database/products.json');//Más seguro utilizar path.resolve
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    
    list: (req, res) => {
        res.render('products/products', {
			products,
			toThousand
		});
    },
    detail: (req, res) => {
        const productId = req.params.id;

        const theProduct = products.find(thisProduct => thisProduct.id == productId);

        return res.render('products/productDetail', {
            product: theProduct,
        });
    },
    create: (req, res) => {
        res.render('products/productCreate');
    },
    store: (req, res) => {
        const generateId = () => {
            const lastProduct = products[products.length - 1]; //Último prod almacenado en la bd
            const lastId = lastProduct.id; //Obtenemos id de ese último prod
            return lastId + 1; // Retornamos ese último Id incrementado en 1
        }
        
        products.push({
            id: generateId(),
            ...req.body,
            image: req.file.filename,
        });
        fs.writeFileSync(productsJSON, JSON.stringify(products, null, ' '));
        res.redirect('/products');
    },
    delete: (req, res) => {
        const newArrayProducts = products.filter(p => p.id !== Number(req.params.id));

        fs.writeFileSync(productsJSON, JSON.stringify(newArrayProducts, null, ' '));
        return res.redirect('/products');
    },

    /*
    cart: (req, res) => {
        res.render('products/cart');
    },
    search: (req, res) => {
    }
    update:
    */
}

module.exports = controller;