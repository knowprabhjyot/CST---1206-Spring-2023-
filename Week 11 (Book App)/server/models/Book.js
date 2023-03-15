const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
})

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;


// One To One RelationShip
// 1 Author --> 1 Book

// One To Many RelationShip
// 1 Author --> Many Books

// Many To Many RelationShip
// Many Authors --> Many Books