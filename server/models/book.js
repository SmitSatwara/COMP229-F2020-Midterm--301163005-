let mongoose = require('mongoose');

// create a model class

/**
 * add your code to 
 * create your model here
 * 
 */

const schema  = {
    "bookId": Number,
    "name": String,
    "author": String,
    "description": String,
    "price" : Number,
    "published" : Number
}

let bookModel = mongoose.Schema(schema , { collection: 'Book' });
module.exports = mongoose.model('Book', bookModel);