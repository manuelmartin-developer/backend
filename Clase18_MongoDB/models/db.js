const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

async function conn(){

    const client = await new MongoClient(url, { useUnifiedTopology: true });

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
        console.log(result);
        return result;
        
    },
    
    findOneProduct: async (id) => {
        
    },
    createProduct: async (product) => {
        const client = await conn();
    
        const result = await client
                                .db('demo')
                                .collection('products')
                                .insertOne(product)

        console.log(result);
        return result;

        
    }



};

module.exports = products;