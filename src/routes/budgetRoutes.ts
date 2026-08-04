import { Router } from "express";
import budgetController from "../controllers/budgetController.js";

const budgetRouter = Router();

budgetRouter.post("/", budgetController.createBudget);
budgetRouter.get("/", budgetController.getAllBudgets);
budgetRouter.get("/:id", budgetController.getSingleBudget);
budgetRouter.put("/:id", budgetController.updateBudget);
budgetRouter.delete("/:id", budgetController.deleteBudget);

export default budgetRouter;
