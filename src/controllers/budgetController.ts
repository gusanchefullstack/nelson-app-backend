import { type Request, type Response, type NextFunction } from "express";
import type { AuthenticatedRequest } from "../middleware/auth";
import budgetServices from "../services/budgetServices";

const createBudget = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const budget = await budgetServices.createBudget(userId!, fields);
    return res.status(201).json({ message: "Created", data: budget });
  } catch (error) {
    next(error);
  }
};
const getAllBudgets = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgets = await budgetServices.getBudgets(userId!);
    return res.status(200).json({ status: "Ok", data: budgets });
  } catch (error) {
    next(error);
  }
};
const getSingleBudget = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const budget = await budgetServices.getSingleBudget(userId!, id);
    return res.status(200).json({ status: `Ok`, data: budget });
  } catch (error) {
    next(error);
  }
};
const updateBudget = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const id = req.params.id as string;
    const budget = await budgetServices.updateBudget(userId!, id, fields);
    return res.status(200).json({ status: "Updated", data: budget });
  } catch (error) {
    next(error);
  }
};
const deleteBudget = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const budget = await budgetServices.deleteBudget(userId!, id)
    return res.status(200).json({ message: "Deleted", data: budget });
  } catch (error) {
    next(error);
  }
};

export default {
  createBudget,
  getAllBudgets,
  getSingleBudget,
  updateBudget,
  deleteBudget,
};
