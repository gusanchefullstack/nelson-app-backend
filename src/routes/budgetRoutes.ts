import { Router } from "express";
import budgetController from "../controllers/budgetController.js";
import { authenticateToken } from "../middleware/auth.js";
import categoryController from "../controllers/categoryController.js";
import budgetItemController from "../controllers/budgetItemController.js";

const budgetRouter = Router();

budgetRouter.use(authenticateToken);

budgetRouter.post("/", budgetController.createBudget);
budgetRouter.get("/", budgetController.getAllBudgets);
budgetRouter.get("/:id", budgetController.getSingleBudget);
budgetRouter.put("/:id", budgetController.updateBudget);
budgetRouter.delete("/:id", budgetController.deleteBudget);

budgetRouter.post("/:id/categories", categoryController.createCategory);
budgetRouter.get("/:id/categories", categoryController.getAllCategories);
budgetRouter.get(
  "/:id/categories/:categoryId",
  categoryController.getSingleCategory,
);
budgetRouter.put(
  "/:id/categories/:categoryId",
  categoryController.updateCategory,
);
budgetRouter.delete(
  "/:id/categories/:categoryId",
  categoryController.deleteCategory,
);

budgetRouter.post(
  "/:id/categories/:categoryId/items",
  budgetItemController.createBudgetItem,
);
budgetRouter.get(
  "/:id/categories/:categoryId/items",
  budgetItemController.getAllBudgetItems,
);
budgetRouter.get(
  "/:id/categories/:categoryId/items/:itemId",
  budgetItemController.getSingleBudgetItem,
);
budgetRouter.put(
  "/:id/categories/:categoryId/items/:itemId",
  budgetItemController.updateBudgetItem,
);
budgetRouter.delete(
  "/:id/categories/:categoryId/items/:itemId",
  budgetItemController.deleteBudgetItem,
);

export default budgetRouter;
