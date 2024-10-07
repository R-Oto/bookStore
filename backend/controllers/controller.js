import Book from "../models/model.js";

export const getBook = async (req,res) => {
    
}

export const createBook = async (req,res) => {
    const {title, body} = req.body;
    if(!title || !body){
        return res.status(400).json({message: "fill in"})
    }
    try{
        const book = await Book.create({title,body})
        return res.status(201).json({message: "Book created"})
    }catch(error){
        console.log(error)
        return res.status(500).json({message: "Failed to create", error})
    }
}

export const updateBook = async (req,res) => {
    
}

export const deleteBook = async (req,res) => {
    
}