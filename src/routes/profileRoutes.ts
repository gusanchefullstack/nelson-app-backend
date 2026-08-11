import { Router } from "express";
import profileController from "../controllers/profileController.js";
import { authenticateToken } from "../middleware/auth.js";


const profileRouter = Router();

profileRouter.use(authenticateToken)

profileRouter.get("/", profileController.userGetProfile);
profileRouter.put("/", profileController.userUpdateProfile);

export default profileRouter