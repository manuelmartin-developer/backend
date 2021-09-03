const Db = require('../models/products_model')

const products = {

    findAllProducts: async (req, res) => {
        try {
            let data = await Db.find();
            res.status(200).json(data);
        } catch (error) {

            res.status(400).json({
                error: error.message
            });
        }
    },

    findOneProduct: async (req, res) => {

        try {

            let data = await Db.find({
                id: Number(req.query.id)
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({
                error: error.message
            });

        }

    },

    addProduct: async (req, res) => {

        const product = new Db(req.body);
        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({
                error: error.message
            });

        }

    },
    updateProduct: async (req, res) => {

        const body = new Db(req.body);
        try {
            let updatedProduct = await Db.findOneAndUpdate({
                id: req.params.id
            }, body);

            res.status(204).json(updatedProduct);
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
    deleteProduct: async (req, res) => {

        try {
            let deletedProduct = await Db.findOneAndDelete({
                id: req.params.id
            });

            res.status(204).json(deletedProduct);
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }
}

module.exports = products;