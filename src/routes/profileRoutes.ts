import { Router } from "express";
import profileController from "../controllers/profileController.js";


const profileRouter = Router();

profileRouter.get("/:id", profileController.userGetProfile);
profileRouter.put("/:id", profileController.userUpdateProfile);

export default profileRouter