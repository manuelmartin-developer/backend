const fetch = require('node-fetch');

const products = {
    getAllProducts: async () => {

        const res = await fetch('https://fakestoreapi.com/products/');
        const products = await res.json();
        return products

    },
    getOneProduct: async (id) => {

        const res = await fetch('https://fakestoreapi.com/products/' + id);
        const product = await res.json();
        return [product]

    },
    createProduct: async (product) => {
        const res = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        const data = await res.json();
        return data;
    }
}
module.exports = products;
