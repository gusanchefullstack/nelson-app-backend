import { Router } from "express";
import authController from "../controllers/authController.js";


const authRouter = Router();

authRouter.post("/signup", authController.userSignUp);
authRouter.post("/login", authController.userLogin);
authRouter.post("/logout", authController.userLogout);
authRouter.get("/profile/:id", authController.userGetProfile);
authRouter.put("/profile/:id", authController.userUpdateProfile);
authRouter.delete("/unsubscribe/:id", authController.userDelete);

export default authRouter