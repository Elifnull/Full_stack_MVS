const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [5, "must be longer than one word!"]
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema);