import { Schema, Types, model } from "mongoose";

const mealSchema = new Schema({
    menuId: { type: Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    time: {
        type: String,
        enum: ['morning', 'afternoon', 'evening']
    }
});

export const MealModel = model('Meal', mealSchema, 'meal')