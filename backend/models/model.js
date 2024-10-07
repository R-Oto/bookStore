import mongoose from "mongoose";

const boolSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})

const Book = mongoose.model("Book", boolSchema)

export default Book;