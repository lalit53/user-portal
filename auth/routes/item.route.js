module.exports = function(app){

    var products = require('../controllers/item.controller.js');

    app.get('/api/productbyid/:id', products.findProductById);
}