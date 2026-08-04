import { type Request, type Response, type NextFunction } from "express";

const createProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Create Provider Controller" });
  } catch (error) {
    next(error);
  }
};
const getAllProviders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Get all Provider Controller" });
  } catch (error) {
    next(error);
  }
};
const getSingleProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    return res.json({ message: `Get single Provider Controller ${id}` });
  } catch (error) {
    next(error);
  }
};
const updateProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Update Provider Controller" });
  } catch (error) {
    next(error);
  }
};
const deleteProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Delete Provider Controller" });
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
