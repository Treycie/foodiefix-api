import { expressjwt } from "express-jwt";

export const checkUserToken = expressjwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"],
});