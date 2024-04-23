import { RecipeModel } from "../models/recipe.models.js";

export const addRecipe = async (req, res, next) => {
    try {
        //Add recipe to database
        const createResult = await RecipeModel.create(req.body);
        //Return response
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }
}
export const getRecipes = async (req, res, next) => {
    try {
        //Get all recipes from database
        const findResult = await RecipeModel.find(req.query);
        //Return response
        res.status(200).json(findResult)
    } catch (error) {
        next(error);
    }
}