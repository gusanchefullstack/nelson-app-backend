import { type Request, type Response, type NextFunction } from "express";

const createPayor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Create Payor Controller" });
  } catch (error) {
    next(error);
  }
};
const getAllPayors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Get all Payor Controller" });
  } catch (error) {
    next(error);
  }
};
const getSinglePayor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    return res.json({ message: `Get single Payor Controller ${id}` });
  } catch (error) {
    next(error);
  }
};
const updatePayor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Update Payor Controller" });
  } catch (error) {
    next(error);
  }
};
const deletePayor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({ message: "Delete Payor Controller" });
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
