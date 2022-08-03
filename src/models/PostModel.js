const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        required: true,
        unique: true,
        type: String
    },
    content: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema);