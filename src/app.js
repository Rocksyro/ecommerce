const express = require('express');
const app = express();
app.use(express.static("public"));
const productsRouter = require('./routes/productsRouter.js');
const mainRouter = require('./routes/mainRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const methodOverride = require('method-override');

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.urlencoded({ extended: true }));//Lo que llegue de un form lo captura y lo convierte en un objeto
app.use(express.json());//Poder convertir el body de una petición a un objeto JSON
app.use(methodOverride('_method'));//Poder sobreescribir el método de un form

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', usersRouter);

