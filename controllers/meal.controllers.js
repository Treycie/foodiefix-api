import { MealModel } from "../models/meal.models.js";

export const addMeal = async (req, res, next) => {
    try {
        //Add meal to database
        const createResult = await MealModel.create({
            ...req.body,
            image: req.file.filename
        });
        //Return response
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }
}

export const getMeals = async (req, res, next) => {
    try {
        //Get all meals from database
        const findResult = await MealModel.find(req.query);
        //Return response
        res.status(200).json(findResult)
    } catch (error) {
        next(error);
    }
}