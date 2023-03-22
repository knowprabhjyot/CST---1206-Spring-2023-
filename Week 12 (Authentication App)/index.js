const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const PORT = 1200;
const app = express();
const userRoutes = require('./routes/user');

app.use(morgan('dev'));

// is used for parsing json
app.use(express.json());

// Send UI from the server
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URL).then((response) => {
    console.log(`Database Connected`);
}).catch((error) => {
    console.log(`There was an error` + error);
})

// app.get('/', (req, res) => {
//     return res.send("ENDPOINTS FOR AUTHENTICATION APP!");
// })


// USERS 
app.use('/api/v1/users', userRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})