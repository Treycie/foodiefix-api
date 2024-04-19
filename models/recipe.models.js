import {Schema, Types, model} from "mongoose";

const recipeSchema = new Schema({
    mealId: { type:Types.ObjectId,required:true},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
   });

   export const RecipeModel =model('recipe',recipeSchema,'recipe');