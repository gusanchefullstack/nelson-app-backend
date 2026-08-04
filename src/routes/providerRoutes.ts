import { Router } from "express";
import providerController from "../controllers/providerController.js";

const providerRouter = Router();

providerRouter.post("/", providerController.createProvider);
providerRouter.get("/", providerController.getAllProviders);
providerRouter.get("/:id", providerController.getSingleProvider);
providerRouter.put("/:id", providerController.updateProvider);
providerRouter.delete("/:id", providerController.deleteProvider);

export default providerRouter;
