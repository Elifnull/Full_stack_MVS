const ProductController = require('../controller/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.findAllProducts);

    app.post('/api/product', ProductController.createProduct);

    app.get('/api/product/:id',ProductController.findOneProduct);

    app.delete('/api/product/:id', ProductController.deleteOneProduct);

    app.put('/api/product/:id', ProductController.updateExistingProduct);
}