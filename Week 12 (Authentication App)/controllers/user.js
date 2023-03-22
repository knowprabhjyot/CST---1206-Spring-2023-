const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  APPLICATION

const registerUser = async (request, response) => {
    const newUser = request.body;
    // Encrypting password so that no one as a developer can read it and misuse it
    const encryptPassword = await bcrypt.hash(newUser.password, 10);

    try {
        let user = new UserModel({
            name: newUser.name,
            email: newUser.email,
            password: encryptPassword
        });
        await user.save();
        return response.status(201).json({
            message: "User sucesfully created"
        })
    } catch (error) {
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const loginUser = async (request, response) => {
    const incomingCredentials = request.body;

    let foundUser = await UserModel.findOne({ email: incomingCredentials.email});


    if (foundUser) {
        // Verify if this credetial is valid, decrypting using compare function
        const matchPassword = await bcrypt.compare(incomingCredentials.password, foundUser.password);

        if (matchPassword) {
            // let the user login

            const accessToken = jwt.sign({
                email: foundUser.email,
                name: foundUser.name
            }, process.env.SECRETKEY)

            return response.status(200).json({
                message: "Succesfully Logged in",
                token: accessToken
            })
        } else {
            // Return the password is incorrect
            return response.status(401).json({
                message:"Password is incorrect, try again"
            })
        }


    } else {
        // Return that user doesn't exist
        return response.status(404).json({
            message: "User doesn't Exist"
        })
    }

}

const getAllUsers = async (request, response) => {
    try {
        let data = await UserModel.find();
        return response.status(200).json({
            message: "Succesfully Fetched the users",
            data
        })
    } catch (error) {
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getUserById = () => {
    // ASsignment
}

const updateUser = () => {
// ASsignment
}

const deleteUser = () => {
// ASsignment
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}

// Json Web Tokens
// UI
// Middlewares