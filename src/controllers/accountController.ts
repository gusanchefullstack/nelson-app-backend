import { type Request, type Response, type NextFunction } from "express";
import type { AuthenticatedRequest } from "../middleware/auth";
import accountServices from "../services/accountServices";

const createAccount = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const account = await accountServices.createAccount(userId!, fields);
    return res.status(201).json({ message: "Created", data: account });
  } catch (error) {
    next(error);
  }
};
const getAllAccounts = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const accounts = await accountServices.getAccounts(userId!);
    return res.status(200).json({ status: "Ok", data: accounts });
  } catch (error) {
    next(error);
  }
};
const getSingleAccount = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const account = await accountServices.getSingleAccount(userId!, id);
    return res.status(200).json({ status: `Ok`, data: account });
  } catch (error) {
    next(error);
  }
};
const updateAccount = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const id = req.params.id as string;
    const account = await accountServices.updateAccount(userId!, id, fields);
    return res.status(200).json({ status: "Updated", data: account });
  } catch (error) {
    next(error);
  }
};
const deleteAccount = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const account = await accountServices.deleteAccount(userId!, id)
    return res.status(200).json({ message: "Deleted", data: account });
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
