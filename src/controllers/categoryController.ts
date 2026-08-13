import { type Request, type Response, type NextFunction } from "express";
import type { AuthenticatedRequest } from "../middleware/auth";
import categoryServices from "../services/categoryServices";

const createCategory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const fields = req.body;
    const category = await categoryServices.createCategory(
      userId!,
      budgetId,
      fields,
    );
    return res.status(201).json({ message: "Created", data: category });
  } catch (error) {
    next(error);
  }
};
const getAllCategories = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categories = await categoryServices.getCategories(userId!, budgetId);
    return res.status(200).json({ status: "Ok", data: categories });
  } catch (error) {
    next(error);
  }
};
const getSingleCategory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;
    const category = await categoryServices.getSingleCategory(
      userId!,
      budgetId,
      categoryId,
    );
    return res.status(200).json({ status: `Ok`, data: category });
  } catch (error) {
    next(error);
  }
};
const updateCategory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const fields = req.body;
    const categoryId = req.params.categoryId as string;
    const category = await categoryServices.updateCategory(
      userId!,
      budgetId,
      categoryId,
      fields,
    );
    return res.status(200).json({ status: "Updated", data: category });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const budgetId = req.params.id as string;
    const categoryId = req.params.categoryId as string;
    const category = await categoryServices.deleteCategory(
      userId!,
      budgetId,
      categoryId,
    );
    return res.status(200).json({ message: "Deleted", data: category });
  } catch (error) {
    next(error);
  }
};

export default {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
