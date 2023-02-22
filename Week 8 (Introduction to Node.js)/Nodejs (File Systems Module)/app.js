// File System Module
const fs = require('fs');
const http = require('http');
const PORT = 3000; // Avoid giving 5000 or 6000

const server = http.createServer((request, response) => {

    // For creating  a particular file
    if (request.url === "/") {
        fs.writeFile("dashboard.html", "<h1 style='color: red'>Dashboard Page</h1>", (error) => {
            console.log(error);
        }) 

        response.write("Welcome to dashboard page!");
        return response.end();
    } 

        // For creating  a particular file
    if (request.url === "/home") {
        fs.writeFile("home.html", "<h1 style='color: green'>Home Page</h1>", (error) => {
            console.log(error);
        })   

        response.write("Welcome to Home page!");
        return response.end();
    }

    // For Updating a particular file
    if (request.url === '/modify') {
        fs.appendFile('read.html', '<h2>This is added after udpdating', function(error) {
            console.log(error);
        })  

        
        response.write("Updating the read file!");
        return response.end();
    }

    if (request.url === '/deleteread') {
        fs.unlink('read.html', function(error) {
            if (error) {
                console.log(error);
            }
        })

        response.write("Deleting the read file!");
        return response.end();
    }

    if (request.url === "/read") {
        
        fs.readFile("read.html", function(error, data) {
            // 200 --> success response
            // 404 --> Not found
            // 401 --> Not Authorized
            response.writeHead(200, { 'Content-Type': 'text/html'});
            console.log(data, "Data");

            if (error) {
                console.error(error);
            }

            response.write(data);
            return response.end();
        })
    }

    if (request.url === "/renameread") {
        fs.rename('read.html', 'hey.html', function(error) {
            if (error) {
                console.log(error);
            }
        })

        response.write("File renamed succesfully!");
        return response.end();
    }



    // response.end();


})

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`);
})