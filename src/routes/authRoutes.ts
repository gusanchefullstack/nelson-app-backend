import { Router } from "express";
import authController from "../controllers/authController.js";
import { authenticateToken } from "../middleware/auth.js";


const authRouter = Router();

authRouter.post("/signup", authController.userSignUp);
authRouter.post("/login", authController.userLogin);
authRouter.post("/logout", authenticateToken ,authController.userLogout);
authRouter.delete("/unsubscribe", authenticateToken, authController.userDelete);

export default authRouter