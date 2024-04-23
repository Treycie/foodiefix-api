import { Router } from "express";
import { addMeal, getMeals } from "../controllers/meal.controllers.js";
import { checkUserToken } from "../middlewares/auth.middleware.js";
import { mealUpload } from "../middlewares/upload.middleware.js";

//Create user router
const mealRouter = Router();

// Apply middlewares
mealRouter.use(checkUserToken);

//Create your routes
mealRouter.post("/", mealUpload.single('image'), addMeal);

mealRouter.get("/", getMeals);

export default mealRouter;
