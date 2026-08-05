import { type Request, type Response, type NextFunction } from "express";
import authServices from "../services/authServices";
import type { IProfile } from "../interfaces/IProfile";
import { UserStatus } from "../../generated/prisma/enums";

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, status, profile } : { username: string, password: string, status: UserStatus, profile: IProfile } = req.body;
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
    return res.json({ message: "Login controller" });
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

export default { userSignUp, userLogin, userLogout };
