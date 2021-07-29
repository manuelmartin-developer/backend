const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

async function conn() {

    const client = await new MongoClient(url, {
        useUnifiedTopology: true
    });

    client
        .connect()
        .then(() => console.log('Client is connected'))
        .catch(e => console.log(`Error: ${e}`));

    return client;

};

const products = {

    findAllProducts: async () => {
        const client = await conn();

        const result = await client
            .db('demo')
            .collection('products')
            .find()
            .toArray();
        return result;

    },

    findOneProduct: async (id) => {
        const client = await conn();

        const result = await client
            .db('demo')
            .collection('products')
            .findOne({
                id
            })
        return result;

    },
    createProduct: async (product) => {
        const client = await conn();

        const result = await client
            .db('demo')
            .collection('products')
            .insertOne(product)

        return result;
    },
    updateProduct: async (product) => {
        const client = await conn();

        const id = product.id;
        const result = await client
            .db('demo')
            .collection('products')
            .updateOne({
                id
            }, {
                $set: product
            });

        return result;

    },
    deleteProduct: async (id) => {
        const client = await conn();

        const result = await client
            .db('demo')
            .collection('products')
            .deleteOne({
                "id": id
            });

        return result;

    }



};

module.exports = products;