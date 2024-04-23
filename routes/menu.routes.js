import { Router } from "express";
import {
  addMenu,
  deleteMenu,
  getMenus,
  updateMenu,
} from "../controllers/menu.controllers.js";
import { checkUserToken } from "../middlewares/auth.middleware.js";

//Create recipe router
const menuRouter = Router();

// Apply middlewares
menuRouter.use(checkUserToken);

//Define your routes
menuRouter.post("/", addMenu);

menuRouter.get("/", getMenus);

menuRouter.patch("/:id", updateMenu);

menuRouter.delete("/:id", deleteMenu);

export default menuRouter;
