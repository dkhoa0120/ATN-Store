const express = require('express');
const route = express.Router();
const renderService = require('../services/render');
const crudController = require('../controllers/crud');

/**
 * @description show products
 * @method GET /
 */
route.get('/', renderService.show_products);

/**
 * @description add a product
 * @method GET /add-product
 */
route.get('/add-product', renderService.add_product);

/**
 * @description update a product
 * @method GET /update-product
 */
route.get('/update-product', renderService.update_product);

//API
route.post('/api/products', crudController.create);
route.get('/api/products', crudController.find);
route.put('/api/products/:id', crudController.update);
route.delete('/api/products/:id', crudController.delete);

module.exports = route;