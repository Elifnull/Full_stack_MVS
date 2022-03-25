const ProductController = require('../controller/product.controller');

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct)
}