const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');

// SEED ROUTE
router.get('/seed', (req, res) => {
    Books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
});


// Index Route
router.get('/', (req, res) => {
    Books.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch(err => {
        res.status(404).json('ERROR - 404', err)
    })
});

// Update Route
router.put('/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBook => {
        res.json(updatedBook)
    })
    .catch (err => {
        res.status(404).json('ERROR - 404', err)
    })
});

// Post Route
router.post('/', (req, res) => {
    Books.create(req.body)
    .then((newBook) => {
        res.json(newBook)
    })
    .catch (err => {
        res.status(404).json('ERROR - 404', err)
    })
});


// Show Route
router.get('/:id', (req, res) => {
    Books.findById(req.params.id)
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch (err => {
        res.status(404).send('ERROR - 404', err)
    })
});


// Delete Route
router.delete('/:id', (req, res) => {
    res.send('This book has been deleted!')
});


module.exports = router;