import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import mealRouter from './routes/meal.routes.js';
import menuRouter from './routes/menu.routes.js';
import recipeRouter from './routes/recipe.routes.js';

// Create express app
const app = express();


// Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Load routes
app.use('/api/users', userRouter);
app.use('/api/menus', menuRouter);
app.use('/api/meals', mealRouter);
app.use('/api/recipes', recipeRouter);



// Make database connection
await mongoose.connect(process.env.MONGO_URI);


// Listen for incoming
const port = process.env.Port || 4000;
app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});