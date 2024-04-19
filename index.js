import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


// Create express app
const app = express();


// Use middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


// Load routes




// Make database connection
await mongoose.connect(process.env.MONGO_URI);


// Listen for incoming
const port = process.env.Port || 4000;
app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});