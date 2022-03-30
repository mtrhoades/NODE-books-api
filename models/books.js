const mongoose = require('mongoose');
const { Schema } = mongoose;

const booksSchema = new Schema(
    {
        "title": String,
        "description": String,
        "year": Number,
        "quantity": Number,
        "imageURL": String
      }
)

const Books = mongoose.model('Books', booksSchema);

module.exports = Books