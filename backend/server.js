import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use("/api/books", router);

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('Connected');
    app.listen(process.env.PORT, () => console.log("Server started"));
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})