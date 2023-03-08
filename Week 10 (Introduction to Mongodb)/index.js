const express = require("express"); // Express framework for backend
const mongoose = require("mongoose");
const app = express();
const PORT = 2000;
require('dotenv').config();
const UserModel = require('./models/user');

// We will use a npm package to hide confidential data directly (Dot env)
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.log("There was an error: " + error);
})

app.get('/', (req, res) => {
    console.log(UserModel, "Value of User model");
    res.send('Welcome to the application!');
})

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})

