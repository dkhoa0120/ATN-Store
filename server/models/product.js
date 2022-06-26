const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
});

const productDB = mongoose.model('products', schema);

module.exports = productDB;