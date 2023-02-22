// Create our own server using Node.js
// We need to have a module called as HTTP

// TCP - Transmission Control Protocol
// HTTP-  Hyper Text Transfer Protocol

// REQUEST - Please send me the data
// Client (Browser) --------------------> Server (Computer)

// RESPONSE - Sure you can have the data
// <----------------  
// If you are using ES5
const http = require('http'); // HTTP module is pre installed in nodejs, you don't have to do it manually
const PORT = 2000;
const server = http.createServer((request, response) => {
    console.log(request.url);
    // We have to tell the response is of some type text/html
    response.setHeader('Content-type', 'text/html');

    if (request.url === '/dog') {
        response.write('<img width="500" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80">')
    } else if (request.url === '/cat') {
        response.write('<img width="500" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80">')

    } else {

        // What data you want to send to the client/browser
        response.write("<h1 style='color: red'>Thankyou for using my server!<h1>");
    }



    // End my response
    response.end();

})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})