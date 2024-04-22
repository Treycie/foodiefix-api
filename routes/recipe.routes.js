import { Router } from "express";
import { addRecipe, getRecipes } from "../controllers/recipe.controllers";

//Create recipe router
const recipeRouter = Router();

//Define your routes
recipeRouter.post("/", addRecipe);

recipeRouter.get("/", getRecipes);

export default recipeRouter;
