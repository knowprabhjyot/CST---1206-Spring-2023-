const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const PORT = 1200;
const app = express();
const userRoutes = require('./routes/user');

app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URL).then((response) => {
    console.log(`Database Connected`);
}).catch((error) => {
    console.log(`There was an error` + error);
})


// USERS 
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
    return res.send("ENDPOINTS FOR AUTHENTICATION APP!");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})