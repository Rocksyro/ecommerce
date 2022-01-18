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
        /*
        let idProduct = req.params.id
        res.sendFile(__dirname + '/views/products/productDetail.html')
        */
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
        console.log(req.body);
        return res.send(req.body);
        /*products.push(req.body);
        fs.writeFileSync(productsJSON, JSON.stringify(products, null, ' '));*/
        
        /*const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            description: req.body.description,
        }
        products.push(newProduct);
        fs.writeFileSync(productsJSON, JSON.stringify(products, null, ' '));
        res.redirect('/products');
        */
    },

    /*
    cart: (req, res) => {
        res.render('products/cart');
    },
    search: (req, res) => {
        let busqueda = req.query.search;
        res.send(busqueda);
    }
    update:
    delete:*/
}

module.exports = controller;