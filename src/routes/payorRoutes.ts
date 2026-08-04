import { Router } from "express";
import payorController from "../controllers/payorController.js";

const payorRouter = Router();

payorRouter.post("/", payorController.createPayor);
payorRouter.get("/", payorController.getAllPayors);
payorRouter.get("/:id", payorController.getSinglePayor);
payorRouter.put("/:id", payorController.updatePayor);
payorRouter.delete("/:id", payorController.deletePayor);

export default payorRouter;
