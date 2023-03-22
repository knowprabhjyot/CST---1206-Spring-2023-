const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

// Login API
router.post('/login', UserController.loginUser)


// SIGNUP API
router.post('/', UserController.registerUser)


// DELETE USER
// router.delete('/', UserController.deleteUser)


// UPDATE USER
// router.put('/', UserController.updateUser)


// GET USER BY ID
// router.get('/', UserController.getUserById)


// GET ALL USERS
router.get('/', UserController.getAllUsers)



module.exports = router;