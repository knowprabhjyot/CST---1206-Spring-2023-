// ES5 Way of Importing!
const config = require('./config'); // this is a js file which we created!

const http = require('http'); // This is a inbuilt module used for http requests

// ES6 Way of importing
// import config from './config';

// Req --> A resource was requested
// Res --> A response was given
const server = http.createServer((req, res) => {
    console.log("Working....");

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.write("Welcome to My Node js Server!");
    }
})

const PORT = 2000; // The port number on which your app runs


server.listen(PORT, (req, res) => {

    console.log("Server Running at PORT : " + PORT );


})