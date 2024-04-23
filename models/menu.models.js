import { Schema, Types, model } from "mongoose";

const menuSchema = new Schema({
    userId: { type: Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export const MenuModel = model('Menu', menuSchema, 'menu');