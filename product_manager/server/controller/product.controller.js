const Product = require('../model/product.model');

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(createdProduct => response.json(createdProduct))
        .catch(err => response.json(err));
}
