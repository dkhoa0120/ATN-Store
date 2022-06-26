var productDB = require('../models/product');

//create and save new product
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    //new product
    const product = new productDB({
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty
    });

    //save product in the database
    product
        .save(product)
        .then(data => {
            // res.send(data);
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error ocurred while creating the product!"
            });
        });
};

//retrieve and return all products/ retrieve and return a single product
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        productDB
        .findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot retrieve product with ${id}. Maybe product not found!`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error occured while retrieving product with id ${id}!`
            });
        });
    } else {
        productDB
        .find()
        .then(product => {
            res.send(product);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving product information!"
            });
        });
    }
};

//update a new identified product by product id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        });
    }

    const id = req.params.id;
    productDB.findByIdAndUpdate(id, req.body, {returnOriginal: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update product with ${id}. Maybe product not found!`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while updating product information!"
            });
        });
};

//delete a product with specified product id
exports.delete = (req, res) => {
    const id = req.params.id;

    productDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with product with id: ${id}. Maybe product not found!`
                });
            } else {
                res.send({
                    message: "Product was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while deleting product information!"
            });
        });
}