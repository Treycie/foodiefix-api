import {Router} from "express";
import { addMenu, deleteMenu, getMenus, updateMenu } from "../controllers/menu.controllers";

//Create recipe router
const menuRouter =Router()


//Define your routes
menuRouter.post('/menus',addMenu)

menuRouter.get('/menus',getMenus)

menuRouter.patch('/menus/:id',updateMenu)

menuRouter.delete('/menus/:id',deleteMenu)

export default menuRouter;