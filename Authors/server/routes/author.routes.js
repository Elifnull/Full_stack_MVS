const AuthorController = require("../controller/author.controller");

module.exports = (app) => {
    app.get("/api/author", AuthorController.findAllAuthors);

    app.get("/api/author/:id", AuthorController.findOneAuthor);

    app.post('/api/author', AuthorController.createAuthor);

    app.put('/api/author/:id', AuthorController.updateAuthor);

    app.delete('/api/author/:id', AuthorController.deleteOneAuthor);
}