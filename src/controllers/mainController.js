const fs = require('fs');
const path = require('path');

const productsJSON = path.resolve(__dirname, '../database/products.json');//Más seguro utilizar el path.resolve
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('index', {
			products
		});
    }
}

module.exports = controller;