const controller = {
    index: (req, res) => {
        //res.sendFile(__dirname + '/views/index.html')
        res.render('index')
    }
}

module.exports = controller;