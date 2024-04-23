import { MenuModel } from "../models/menu.models.js";

export const addMenu = async (req, res, next) => {
    try {
        //Add menu to database
        const createResult = await MenuModel.create({
            ...req.body,
            userId: req.auth.id
        });
        //Return response
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }
}
export const getMenus = async (req, res, next) => {
    try {
        //Get all menus from database
        const findResult = await MenuModel.find(req.query);
        //Return response
        res.status(200).json(findResult)
    } catch (error) {
        next(error);
    }
}

export const updateMenu = (req, res) => {
    res.send(`Update single receipe! by id: ${req.params.id}`);
}

export const deleteMenu = (req, res) => {
    res.send(`Delete single receipe!byid: ${req.params.id} `);
}