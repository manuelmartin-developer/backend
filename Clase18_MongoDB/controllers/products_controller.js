const db = require('../models/db');

const products = {

    findAllProducts: async (req, res) => {
        
        let data = await db.findAllProducts();
        res.status(200).json(data);
    },
    
    findOneProduct: async (req, res) => {
        let data = await db.findOneProduct(Number(req.params.id));
        res.status(200).json(data);
        
    },
    
    addProduct: async (req, res) => {
        
        const requestBody = await req.body;
        const newProduct = await db.createProduct(requestBody);

        res.status(201).json(newProduct);
    },
    updateProduct: async (req, res) => {

        const body = await req.body;
        const updatedProduct = await db.updateProduct(body);

        res.status(204).json(updatedProduct);
    },
    deleteProduct: async (req, res) => {

        const id = await req.params.id;
        const deletedProduct = await db.deleteProduct(Number(id));

        res.status(200).send(`El objeto #id: ${id} ha sido borrado`);
    }
}

module.exports = products;