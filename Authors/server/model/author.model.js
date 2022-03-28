const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: [true, "emptiness only works for nihalists, please fill in an author"],
        minlength: [3, "Most stories have 3 acts, and most author have more than 3 characters"]
    }
}, { timestamps: true })

module.exports = mongoose.model("author", AuthorSchema);