const util = require('../utils/products');
const products = {

    products: async (req, res) => {

        let data;
        req.params.id?
        data = await util.getOneProduct(req.params.id):
        data = await util.getAllProducts();
        
        res.status(200).json({data});

    },
    createProduct: async (req, res) => {

        const oneProduct = await util.createProduct(req.body);
        console.log(oneProduct);
        
        let data = await util.getAllProducts();
        data.push(oneProduct)
        console.log(data);

       res.status(201).json(oneProduct);
    }
   
};

module.exports = products;