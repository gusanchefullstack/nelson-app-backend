import { Router } from "express";
import accountController from "../controllers/accountController.js";

const accountRouter = Router();

accountRouter.post("/", accountController.createAccount);
accountRouter.get("/", accountController.getAllAccounts);
accountRouter.get("/:id", accountController.getSingleAccount);
accountRouter.put("/:id", accountController.updateAccount);
accountRouter.delete("/:id", accountController.deleteAccount);

export default accountRouter;
