import { type Request, type Response, type NextFunction } from "express";
import { error } from "node:console";

const insertTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Insert transaction controller" });
  } catch (error) {
    next(error);
  }
};

const getAllTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Get all transactions controller" });
  } catch (error) {
    next(error);
  }
};

const getSingleTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    try {
    const { id } = req.params;
    return res.json({ message: `get single transaction controller ${id}` });
  } catch (error) {
    next(error);
  }
};

const updateTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    return res.json({ message: `Update transaction controller ${id}` });
  } catch (error) {
    next(error);
  }
};

export default {
  insertTransaction,
  getAllTransactions,
  getSingleTransaction,
  updateTransaction,
};
