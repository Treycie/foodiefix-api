import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const mealUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/images/meals/*'
    }),
    preservePath: true
});