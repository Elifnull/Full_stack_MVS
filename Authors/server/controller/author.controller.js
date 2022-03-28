const Author = require('../model/author.model');

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(createdAuthor => response.json(createdAuthor))
        .catch(error => response.status(400).json(error));
}

module.exports.findAllAuthors = (request, response) => {
    Author.find({})
        .then( foundAuthor => {
            console.log(foundAuthor);
            response.json(foundAuthor);
        })
        .catch(error => response.json({message: error}, err));
}

module.exports.deleteOneAuthor = (request, response) =>{
    Author.deleteOne({_id: request.params.id})
        .then(deletedAuthor => response.json(deletedAuthor))
        .catch(error => response.json({message: error}));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id},
        request.body,
        { new: true, runValidators: true}
        )
        .then(updatedAuthor => {
            console.log(updatedAuthor);
            response.json(updatedAuthor)
        })
        .catch((error) =>{
            response.status(400).json(error);
        })
}