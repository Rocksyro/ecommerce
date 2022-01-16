const fs = require('fs');
const path = require('path');
const multer = require('multer');

const productsJSON = path.join(__dirname, '../database/products.json');
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
        const product = productsDB.find(thisProduct => thisProduct.id == productId);

        return res.render('products/productDetail', {
            product,
        });
    
        res.render('products/productDetail');
    },
    cart: (req, res) => {
        res.render('products/cart');
    },
    search: (req, res) => {
        let busqueda = req.query.search;
        res.send(busqueda);
    }
    /*update:
    delete:*/
}

module.exports = controller;