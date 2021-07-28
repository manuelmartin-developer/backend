const router = require('express').Router();
const products = require('../controllers/products_controller');

//Endpoints
router.get('/', products.findAllProducts);
router.get('/:id', products.findOneProduct);
router.post('/', products.addProduct);

module.exports = router;