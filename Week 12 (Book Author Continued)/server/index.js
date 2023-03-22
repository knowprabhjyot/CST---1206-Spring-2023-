const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = 2500;
const AuthorRoute = require('./routes/authorRoute');
const BookRoute = require('./routes/bookRoute');


require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// CORS
// Cross Origin Resource Sharing
// Our server runs at 2500 port and UI runs at 5500
// So this is a point of conflict for browser and by default it doesnt allow it.
// So we have to explicility allow that to happen


mongoose.connect(process.env.MONGODB_URL).then((response) => {
    console.log(`Database Connected`);
}).catch((error) => {
    console.log(`There was an error` + error);
})

app.get('/', (req, res) => {
    return res.send("ENDPOINTS FOR BOOK AUTHOR API!");
})

// AUTHOR ROUTES
// Middleware!
app.use('/api/v1/author', AuthorRoute);

// BOOK ROUTES
app.use('/api/v1/book', BookRoute);


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})