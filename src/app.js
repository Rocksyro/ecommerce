const express = require('express');
const app = express();
app.use(express.static("public"));
const productsRouter = require('./routes/productsRouter.js');
const mainRouter = require('./routes/mainRouter.js');
const usersRouter = require('./routes/usersRouter.js');

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', usersRouter);

