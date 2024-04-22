import { Router } from "express";

//Create user router
const userRouter = Router();

//Define your routes
userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/me", userProfile);

userRouter.post("/logout", logoutuser);

export default userRouter;
