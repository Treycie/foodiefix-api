import { Router } from "express";
import { loginUser, logoutUser, registerUser, userProfile } from "../controllers/user.controllers.js";
import { checkUserToken } from "../middlewares/auth.middleware.js";

//Create user router
const userRouter = Router();

//Define your routes
userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/me", checkUserToken, userProfile);

userRouter.post("/logout", checkUserToken, logoutUser);

export default userRouter;
