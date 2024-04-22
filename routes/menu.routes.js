import { Router } from "express";
import {
  addMenu,
  deleteMenu,
  getMenus,
  updateMenu,
} from "../controllers/menu.controllers";

//Create recipe router
const menuRouter = Router();

//Define your routes
menuRouter.post("/", addMenu);

menuRouter.get("/", getMenus);

menuRouter.patch("/:id", updateMenu);

menuRouter.delete("/:id", deleteMenu);

export default menuRouter;
