module.exports = function (app) {

    var products = require('../controllers/product.controller.js');

    // Find all products
    app.get('/api/products', products.findAll);

    // Find a single Product by Id
    app.get('/api/productbyid/:id', products.findProductById);

    // Find a single Product by Name
    app.get('/api/products/:productName', products.findByName);

    // Find all Products of a Company
    app.get('/api/products/company/:companyId', products.findByCompanyId);

}