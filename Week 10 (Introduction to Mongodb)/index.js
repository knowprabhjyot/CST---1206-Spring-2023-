const express = require("express"); // Express framework for backend
const mongoose = require("mongoose");
const app = express();
const PORT = 2000;
require('dotenv').config();
const UserModel = require('./models/user');

// So that we can acccept json values
app.use(express.json());

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

// GET API for fetching List of Users!
app.get('/api/users', (req, res) => {
    // These operations are asynchronous, and theyu return promises. Which means you have to use then and catch || async await
    // Find returns a promise where the value is an array/collection
    UserModel.find().then((data) => {
        // res.send(data);
        // 200 Status code means data fetched succesfully
       return res.status(200).json({
            result: data,
            message: "Users found Succesfully!"
        })
    }).catch((error) => {
        // 500 --> Means 500 Internal Server Error
      return res.status(500).json({
        error,
        message: "There was an error!"
       })
    })
})


// POST API for creating a User
app.post('/api/users', async (req, res) => {
    const incomingData = req.body;
    const newUser = new UserModel({
        name: incomingData.name,
        email: incomingData.email,
        password: incomingData.password,
        contact: incomingData.contact
    })

    try {
        await newUser.save();
        return res.status(201).json({
            message: "Succesfully Added a user",
            result: newUser
        })
    } catch(error) {
        return res.status(500).json({
            message: "There is an error",
            error
        })
    }



})

// GET API for a particular user for given ID
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById(id).then((response) => {
        
        if (response) {
            return res.status(200).json({
                result: response,
                message: "User found Succesfully!"
            })
        } else {
            // 404 Status code means - NOT FOUND
            return res.status(404).json({
                message: "User Not Found!"
            })
        }
        
    }).catch((error) => {
        return res.status(500).json({
            message: "There is an error",
            error
        })
    })
})


// GET API for a particular user for email
app.get('/api/users/email/:email', (req, res) => {
    const incomingEmail = req.params.email;
    UserModel.findOne({ email: incomingEmail}).then((response) => {
        if (response) {
            return res.status(200).json({
                result: response,
                message: "User found Succesfully!"
            })
        } else {
            // 404 Status code means - NOT FOUND
            return res.status(404).json({
                message: "User Not Found!"
            })
        }
        
    }).catch((error) => {
        return res.status(500).json({
            message: "There is an error",
            error
        })
    })
})



// DELETE API for a particular user for given ID
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id).then((response) => {
        
        if (response) {
            return res.status(200).json({
                message: "User Deleted Succesfully!"
            })
        }
        
    }).catch((error) => {
        return res.status(500).json({
            message: "There is an error",
            error
        })
    })
})


// PUT API for updating a particular user for given ID
app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    UserModel.findByIdAndUpdate(id, updatedUser, { returnOriginal : false}).then((response) => {
        
        if (response) {
            return res.status(200).json({
                result: response,
                message: "User Updated Succesfully!"
            })
        }
        
    }).catch((error) => {
        return res.status(500).json({
            message: "There is an error",
            error
        })
    })
})


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})

