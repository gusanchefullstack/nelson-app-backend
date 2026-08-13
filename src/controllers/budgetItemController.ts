import { type Request, type Response, type NextFunction } from "express";
import type { AuthenticatedRequest } from "../middleware/auth";
import budgetItemServices from "../services/budgetItemServices";

const createBudgetItem = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;
    const fields = req.body;

    const budgetItem = await budgetItemServices.createBudgetItem(
      userId!,
      budgetId,
      categoryId,
      fields,
    );
    return res.status(201).json({ message: "Created", data: budgetItem });
  } catch (error) {
    next(error);
  }
};
const getAllBudgetItems = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;

    const categories = await budgetItemServices.getBudgetItems(
      userId!,
      budgetId,
      categoryId,
    );
    return res.status(200).json({ status: "Ok", data: categories });
  } catch (error) {
    next(error);
  }
};
const getSingleBudgetItem = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;
    const id = req.params.itemId as string;

    const budgetItem = await budgetItemServices.getSingleBudgetItem(
      userId!,
      budgetId,
      categoryId,
      id,
    );
    return res.status(200).json({ status: `Ok`, data: budgetItem });
  } catch (error) {
    next(error);
  }
};
const updateBudgetItem = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;
    const id = req.params.itemId as string;
    const fields = req.body;

    const budgetItem = await budgetItemServices.updateBudgetItem(
      userId!,
      budgetId,
      categoryId,
      id,
      fields,
    );
    return res.status(200).json({ status: "Updated", data: budgetItem });
  } catch (error) {
    next(error);
  }
};

const deleteBudgetItem = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;
    const id = req.params.itemId as string;

    const budgetItem = await budgetItemServices.deleteBudgetItem(
      userId!,
      budgetId,
      categoryId,
      id,
    );
    return res.status(200).json({ message: "Deleted", data: budgetItem });
  } catch (error) {
    next(error);
  }
};

export default {
  createBudgetItem,
  getAllBudgetItems,
  getSingleBudgetItem,
  updateBudgetItem,
  deleteBudgetItem,
};
