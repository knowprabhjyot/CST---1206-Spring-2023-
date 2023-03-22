const express = require('express');
const router = express.Router();
const AuthorController = require('../controller/Author');

// API's for AUTHOR ROUTES

// Create Author API
router.post('/', AuthorController.createAuthor);

// Get All Authors API
router.get('/', AuthorController.getAllAuthors);

// Updating an Author
router.put('/:id', AuthorController.updateAuthor);

// Get an Author based on ID
router.get('/:id', AuthorController.getAuthorById);

// Delete Author
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router;