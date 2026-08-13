import { Router } from "express";
import providerController from "../controllers/providerController.js";
import { authenticateToken } from "../middleware/auth.js";

const providerRouter = Router();

providerRouter.use(authenticateToken);

providerRouter.post("/", providerController.createProvider);
providerRouter.get("/", providerController.getAllProviders);
providerRouter.get("/:id", providerController.getSingleProvider);
providerRouter.put("/:id", providerController.updateProvider);
providerRouter.delete("/:id", providerController.deleteProvider);

export default providerRouter;
