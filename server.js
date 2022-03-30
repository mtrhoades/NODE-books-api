// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
);
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the BOOKS API!')
});
  
// Controller
const booksController = require('./controllers/books_controller.js');
app.use('/books', booksController);


// LISTEN
app.listen(PORT, () => {
console.log('CORS-enabled web server listening From port: ', PORT);
});