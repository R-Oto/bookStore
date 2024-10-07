import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use("/api/books", router);

mongoose.connect(process.env.ATLAS_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => console.log("Server started on port", process.env.PORT));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
