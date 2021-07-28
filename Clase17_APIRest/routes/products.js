const router = require('express').Router();
const products = require('../controllers/products');
    //Endpoints
    router.get('/products/:id?', products.products);
    // POST
    router.post('/products', products.createProduct);

module.exports = router;