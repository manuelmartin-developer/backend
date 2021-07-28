const db = require('../models/db');

const products = {

    findAllProducts: async (req, res) => {
        
        let data = await db.findAllProducts();
        res.status(200).json(data);
    },
    
    findOneProduct: async (req, res) => {
        console.log(res);
        
    },
    
    addProduct: async (req, res) => {
        
        const body = req.body;
        const newProduct = await db.createProduct(body);

        res.status(201).json(newProduct);


    }

}

module.exports = products;