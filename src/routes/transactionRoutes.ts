import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
const transactionRouter = Router();

transactionRouter.post("/", transactionController.insertTransaction);
transactionRouter.get("/", transactionController.getAllTransactions);
transactionRouter.get("/:id", transactionController.getSingleTransaction);
transactionRouter.put("/:id", transactionController.updateTransaction);

export default transactionRouter;