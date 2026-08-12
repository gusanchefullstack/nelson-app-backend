import { type Request, type Response, type NextFunction } from "express";
import type { AuthenticatedRequest } from "../middleware/auth";
import payorServices from "../services/payorServices";

const createPayor = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const payor = await payorServices.createPayor(userId!, fields);
    return res.status(201).json({ message: "Created", data: payor });
  } catch (error) {
    next(error);
  }
};
const getAllPayors = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const payors = await payorServices.getPayors(userId!);
    return res.status(200).json({ status: "Ok", data: payors });
  } catch (error) {
    next(error);
  }
};
const getSinglePayor = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const payor = await payorServices.getSinglePayor(userId!, id);
    return res.status(200).json({ status: `Ok`, data: payor });
  } catch (error) {
    next(error);
  }
};
const updatePayor = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const id = req.params.id as string;
    const payor = await payorServices.updatePayor(userId!, id, fields);
    return res.status(200).json({ status: "Updated", data: payor });
  } catch (error) {
    next(error);
  }
};
const deletePayor = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const payor = await payorServices.deletePayor(userId!, id)
    return res.status(200).json({ message: "Deleted", data: payor });
  } catch (error) {
    next(error);
  }
};

export default {
  createPayor,
  getAllPayors,
  getSinglePayor,
  updatePayor,
  deletePayor,
};
