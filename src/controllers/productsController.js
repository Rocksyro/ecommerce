const controller = {
    list: (req, res) => {
        //res.sendFile(__dirname + '/views/products/products.html')
        res.send('Lista productos')
    },
    detail: (req, res) => {
        /*
        let idProduct = req.params.id
        res.sendFile(__dirname + '/views/products/productDetail.html')
        */
        res.send('Detalle producto')
    },
    cart: (req, res) => {
        //res.sendFile(__dirname + '/views/products/cart.html')
        res.send('Carrito de compras')
    }
    /*update:
    delete:*/
}

module.exports = controller;