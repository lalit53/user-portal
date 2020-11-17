const Item = require ('../models/item')


exports.findProductById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
};