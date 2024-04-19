import { RecipeModel } from "../models/recipe.models";

export const addRecipe = async (req, res,next) => {
     try {
    
        //Add recipe to database
        const createResult = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        //Return response
        res.status(201).json(createResult);
        
    } catch (error) {
        next(error);
    }
}
export const getRecipes =async (req, res,next) => {
    try {
         //Get all recipes from database
         const findResult = await RecipeModel.find();
         //Return response
         res.status(200).json(findResult)
          
    } catch (error) {
       next(error);
    }
   }