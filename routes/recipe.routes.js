import { Router } from "express";
import { addRecipe, getRecipes } from "../controllers/recipe.controllers.js";
import { checkUserToken } from "../middlewares/auth.middleware.js";

//Create recipe router
const recipeRouter = Router();

// Apply middlewares
recipeRouter.use(checkUserToken);

//Define your routes
recipeRouter.post("/", addRecipe);

recipeRouter.get("/", getRecipes);

export default recipeRouter;
