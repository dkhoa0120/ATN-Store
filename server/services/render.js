const axios = require('axios');

exports.show_products = (req, res) => {
    //make a get request to the /api/products
    axios.get(`${process.env.ROOT}/api/products`).
        then(function(response) {
            res.render('index', { products : response.data });
        })
        .catch(err => {
            res.send(err);
        });
};

exports.add_product = (req, res) => {
    res.render('add_product');
};

exports.update_product = (req, res) => {
    axios.get(`${process.env.ROOT}/api/products`, {params: { id : req.query.id }})
        .then(function(response) {
            res.render("update_product", { product : response.data });
        })
        .catch(err => {
            res.send(err);
        });
};