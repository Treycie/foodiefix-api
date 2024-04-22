import { Router } from "express";
import { addMeal, getMeals } from "../controllers/meal.controllers";

//Create user router
const mealRouter = Router();

//Create your routes
mealRouter.post("/", addMeal);

mealRouter.get("/", getMeals);

export default mealRouter;
