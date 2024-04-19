import {Router} from "express"
import { addMeal,getMeals } from "../controllers/meal.controllers"

//Create user router
const mealRouter= Router()



//Create your routes
mealRouter.post('/meals',addMeal)

mealRouter.get('/meals',getMeals)

export default mealRouter;