const express = require('express');
require('dotenv').config() //Carga variable configuracion
require('./utils/db');// Lanzamos la BD con mongoose
const products = require('./routes/product_routes');


const app = express();
const port = 3000;


//Middlewares
app.use(express.json());


//Routes

app.use('/api/products', products);



const server = app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`);
});

module.exports = {app, server};