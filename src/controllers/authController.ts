import {
  type Request,
  type Response,
  type NextFunction,
} from "express";

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ message: "Signup controller" });
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
