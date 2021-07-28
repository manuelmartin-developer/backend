const express = require('express');
const routes = require('./routes/products_routes');
const products = require('./routes/products_routes');

const app = express();
const port = 3000;


//Middlewares
app.use(express.json());


//Routes
app.use('/api/products', products);



app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`);
});