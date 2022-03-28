const AuthorController = require("../controller/author.controller");

module.exports = (app) => {
    app.get("/api/author", AuthorController.findAllAuthors);
    
    app.post('/api/author/', AuthorController.createAuthor);

    app.delete('/api/author/:id', AuthorController.deleteOneAuthor);

    app.put('/api/author/:id', AuthorController.updateAuthor);
}