const express = require('express');
const router = express.Router();
const BookController = require('../controller/Book');

// API's for BOOK ROUTES

// Create a book
router.post('/', BookController.createBook);

// Get a book by ID
router.get('/:id', BookController.getBookById);


// Delete a book
router.delete('/:id', BookController.deleteBook);


// Get All Books
router.get('/', BookController.getAllBooks);


module.exports = router;