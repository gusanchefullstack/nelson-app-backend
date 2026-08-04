import { type Request, type Response, type NextFunction } from "express";

const createAccount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Create Account Controller" });
  } catch (error) {
    next(error);
  }
};
const getAllAccounts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Get all Account Controller" });
  } catch (error) {
    next(error);
  }
};
const getSingleAccount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    return res.json({ message: `Get single Account Controller ${id}` });
  } catch (error) {
    next(error);
  }
};
const updateAccount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Update Account Controller" });
  } catch (error) {
    next(error);
  }
};
const deleteAccount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Delete Account Controller" });
  } catch (error) {
    next(error);
  }
};

export default {
  createAccount,
  getAllAccounts,
  getSingleAccount,
  updateAccount,
  deleteAccount,
};
