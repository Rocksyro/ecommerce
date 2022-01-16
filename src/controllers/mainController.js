const fs = require('fs');
const path = require('path');

const productsJSON = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        res.render('index', {
			products,
			toThousand
		});
    }
}

module.exports = controller;