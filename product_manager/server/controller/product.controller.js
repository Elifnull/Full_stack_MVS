const Product = require('../model/product.model');

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(createdProduct => response.json(createdProduct))
        .catch(err => response.status(400).json(err));
}
module.exports.findAllProducts = (request, response) => {
    Product.find({})
        .then(foundProducts=> {
            console.log(foundProducts);
            response.json(foundProducts);
        })
        .catch(err => res.json({message: `error ${err}`}, err));
}

module.exports.findOneProduct = (request, response) => {
    Product.findById({_id:request.params.id})
        .then(productById => {
            console.log(productById)
            response.json({product:productById});}
        )
        .catch(err =>{

        });
}

module.exports.deleteOneProduct = (response, request) => {
    Product.deleteOne({_id: request.params.id})
        .then(uponDelete => res.json(uponDelete))
        .catch(err=> response.json({message: `error:${err}`}));
}

module.exports.updateExistingProduct = (response, request) => {
    Product.findOneAndUpdate({_id: request.params.id},
        request.body,
        { new: true, runValidators: true}
        )
        .then(updatedProd => {
            console.log(updatedProd);
            response.json({product: updatedProd})
        })
        .catch((err)=>{
            response.status(400).json(err);
        })
}