import { type Request, type Response, type NextFunction } from "express";
import profileServices from "../services/profileServices.js";

const userGetProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } : { id: string} = req.params as unknown as string;
    const profile = await profileServices.getUserProfile(id)
    return res.status(200).json({status: "Ok", data: profile})
  } catch (error) {
    next(error)
  }
}

const userUpdateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id }: { id: string; } = req.params as unknown as string;
    const fields = req. body
    const profile = await profileServices.updateUserProfile(id, fields)
    return res.status(200).json({status: "Ok", data: profile})
  } catch (error) {
    next(error)
  }
}

export default { userGetProfile, userUpdateProfile };
