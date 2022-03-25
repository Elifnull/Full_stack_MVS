const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true,
        minlength: [5, "must be longer than one word!"]
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema);