import { type Request, type Response, type NextFunction } from "express";
import profileServices from "../services/profileServices.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";

const userGetProfile = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const profile = await profileServices.getUserProfile(userId!);
    return res.status(200).json({ status: "Ok", data: profile });
  } catch (error) {
    next(error);
  }
};

const userUpdateProfile = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const fields = req.body;
    const profile = await profileServices.updateUserProfile(userId!, fields);
    return res.status(200).json({ status: "Ok", data: profile });
  } catch (error) {
    next(error);
  }
};

export default { userGetProfile, userUpdateProfile };
