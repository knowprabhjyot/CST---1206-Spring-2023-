const AuthorModel = require('../models/Author');

const createAuthor =  async (req, res) => {
    const incomingData = req.body;
    console.log(incomingData, "INCOMING DATA");
    const newAuthor = new AuthorModel({
        name: incomingData.name,
        email: incomingData.email,
        contact: incomingData.contact
    })

    try {
        const response = await newAuthor.save();
        res.status(201).json({
            message: "Author Succesfully Created",
            data: response
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }

}   

const getAllAuthors = async (req, res) => {
    try {
        const authorData = await AuthorModel.find();
        return res.status(200).json({
            message: "Succesfully Fetched the Authors",
            data: authorData
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getAuthorById = async (req, res) => {
    const id = req.params.id;
    

    try {
        const authorData = await AuthorModel.findById(id);
                
        if (authorData) {
            return res.status(200).json({
                message: `Succesfully Fetched the Author ${authorData.name}`,
                data: authorData
            })
        }

        return res.status(404).json({
            message: "Author Does not Exist",
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}


const updateAuthor = async (req, res) => {
    const id = req.params.id;
    const incomingData = req.body;

    try {   
        const authorData = await AuthorModel.findByIdAndUpdate(id, incomingData, { returnOriginal: false });
        return res.status(200).json({
            message: `Succesfully Updated the Author ${authorData.name}`,
            data: authorData
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const deleteAuthor = async (req, res) => {
    const id = req.params.id;

    try {
        await AuthorModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: `Succesfully Deleted the Author`,
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}