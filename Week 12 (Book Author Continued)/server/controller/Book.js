const BookModel = require('../models/Book');


const createBook =  async (req, res) => {
    const incomingData = req.body;
    console.log(incomingData, "incoming");
    const newBook = new BookModel({
        title: incomingData.title,
        description: incomingData.description,
        author: incomingData.author
    })

    try {
        const response = await newBook.save();
        res.status(201).json({
            message: "Book Succesfully Created",
            data: response
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }

} 

const getAllBooks = async (req, res) => {
    try {
        const bookData = await BookModel.find();
        return res.status(200).json({
            message: "Succesfully Fetched the books",
            data: bookData
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getBookById = async (req, res) => {
    const id = req.params.id;
    

    try {
        const bookData = await BookModel.findById(id);
                
        if (bookData) {
            return res.status(200).json({
                message: `Succesfully Fetched the Book:  ${bookData.title}`,
                data: bookData
            })
        }

        return res.status(404).json({
            message: "Book Does not Exist",
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id;

    try {
        await BookModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: `Succesfully Deleted the Book`,
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    deleteBook
}