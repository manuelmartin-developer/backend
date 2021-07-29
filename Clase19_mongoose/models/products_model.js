const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique:true,
        required:true
    },
    price: Number,
    description: String,
    image: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('https://') === 0;
            },
            message: 'la URL de la imagen debe empezar por https://'
        }
    },
    category: String,
    id: Number
})

module.exports = mongoose.model('Product', productSchema);