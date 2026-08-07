import { type Request, type Response, type NextFunction } from "express";
import authServices from "../services/authServices.js";
import type { IProfile } from "../interfaces/IProfile.js";
import { UserStatus } from "../../generated/prisma/enums.js";

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      username,
      password,
      status,
      profile,
    }: {
      username: string;
      password: string;
      status: UserStatus;
      profile: IProfile;
    } = req.body;
    const user = await authServices.signUpUser(
      username,
      password,
      status,
      profile,
    );
    return res.status(201).json({ status: "Created", data: user });
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;
    const user = await authServices.loginUser(username, password);
    return res.status(200).json({ status: "Success", data: user });
  } catch (error) {
    next(error);
  }
};

const userLogout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ message: "Logout controller" });
  } catch (error) {
    next(error);
  }
};

const userGetProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } : { id: string} = req.params as unknown as string;
    const profile = await authServices.getUserProfile(id)
    return res.status(200).json({status: "Ok", data: profile})
  } catch (error) {
    next(error)
  }
}

const userUpdateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id }: { id: string; } = req.params as unknown as string;
    const fields = req. body
    const user = await authServices.updateUserProfile(id, fields)
    return res.status(200).json({status: "Ok", data: user})
  } catch (error) {
    next(error)
  }
}



const userDelete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } : { id: string} = req.params as unknown as string;
    const user = await authServices.deleteUser(id);
    return res.status(200).json({ status: "Deleted", data: {user} });
  } catch (error) {
    next(error);
  }
};

export default { userSignUp, userLogin, userLogout, userDelete, userGetProfile, userUpdateProfile };
