import { type Request, type Response, type NextFunction } from "express";
import type { AuthenticatedRequest } from "../middleware/auth";
import providerServices from "../services/providerServices";

const createProvider = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const provider = await providerServices.createProvider(userId!, fields);
    return res.status(201).json({ message: "Created", data: provider });
  } catch (error) {
    next(error);
  }
};
const getAllProviders = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const providers = await providerServices.getProviders(userId!);
    return res.status(200).json({ status: "Ok", data: providers });
  } catch (error) {
    next(error);
  }
};
const getSingleProvider = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const provider = await providerServices.getSingleProvider(userId!, id);
    return res.status(200).json({ status: `Ok`, data: provider });
  } catch (error) {
    next(error);
  }
};
const updateProvider = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const id = req.params.id as string;
    const provider = await providerServices.updateProvider(userId!, id, fields);
    return res.status(200).json({ status: "Updated", data: provider });
  } catch (error) {
    next(error);
  }
};
const deleteProvider = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;
    const provider = await providerServices.deleteProvider(userId!, id)
    return res.status(200).json({ message: "Deleted", data: provider });
  } catch (error) {
    next(error);
  }
};

export default {
  createProvider,
  getAllProviders,
  getSingleProvider,
  updateProvider,
  deleteProvider,
};
