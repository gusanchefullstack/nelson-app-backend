import { type Request, type Response, type NextFunction } from "express";
import authServices from "../services/authServices.js";
import type { IProfile } from "../interfaces/IProfile.js";
import { UserStatus } from "../../generated/prisma/enums.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";

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

const userLogout = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    return res.json({ message: `USer logged out ${req.user?.username}`});
  } catch (error) {
    next(error);
  }
};

const userDelete = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const user = await authServices.deleteUser(userId!);
    return res.status(200).json({ status: "Deleted", data: { user } });
  } catch (error) {
    next(error);
  }
};

export default { userSignUp, userLogin, userLogout, userDelete };
