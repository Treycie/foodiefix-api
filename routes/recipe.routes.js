import {Router} from "express";
import { addRecipe, getRecipes } from "../controllers/recipe.controllers";


//Create recipe router
const recipeRouter =Router();

//Define your routes
recipeRouter.post('/recipes',addRecipe);

recipeRouter.get('/recipes',getRecipes)

export default recipeRouter;