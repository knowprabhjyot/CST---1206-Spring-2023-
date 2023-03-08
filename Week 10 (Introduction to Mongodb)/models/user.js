// Schemas should be specifically related to user!
const mongoose = require("mongoose");

// Creating User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // This becomes optional since we are not setting is as required.
    contact:{ 
        type: Number
    }
})

// Now we have to wrap that mongo Schema inside a model
const UserModel = mongoose.model("User", UserSchema);


// Export it from this file, so that other files can use it!
module.exports = UserModel;