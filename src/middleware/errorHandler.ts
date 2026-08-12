import { type Request, type Response, type NextFunction } from "express";
import { Prisma } from "../../generated/prisma/client";

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if(err.code === "P2025")  res.status(404).json({
      message: `Item not found`,
    });
  } else {
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  }
};
