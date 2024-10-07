import Book from "../models/model.js";

export const getBook = async (req,res) => {
    try {
        const books = await Book.find(); 
        return res.status(200).json(books); 
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: "Failed to retrieve books", error });
    }
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
    const id = req.params.id;
    const updateData = req.body; 

try {
    const book = await Book.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    
    return res.status(200).json({ message: "Book updated", book });
} catch (error) {
    console.error(error); 
    return res.status(500).json({ message: "Failed to update", error });
}

}

export const deleteBook = async (req,res) => {
    const id = req.params.id;

    try {
        const book = await Book.findByIdAndDelete(id);
        
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: "Failed to delete book", error });
    }
}