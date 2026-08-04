import { type Request, type Response, type NextFunction } from "express";

const createBudget = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Create Budget Controller" });
  } catch (error) {
    next(error);
  }
};
const getAllBudgets = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Get all Budget Controller" });
  } catch (error) {
    next(error);
  }
};
const getSingleBudget = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    return res.json({ message: `Get single Budget Controller ${id}` });
  } catch (error) {
    next(error);
  }
};
const updateBudget = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Update Budget Controller" });
  } catch (error) {
    next(error);
  }
};
const deleteBudget = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Delete Budget Controller" });
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
