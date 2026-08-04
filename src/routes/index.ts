import { Router } from "express";
import { type Request, type Response } from "express";
import authRouter from "./authRoutes.js";
import budgetRouter from "./budgetRoutes.js";
import transactionRouter from "./transactionRoutes.js";
import payorRouter from "./payorRoutes.js";
import providerRouter from "./providerRoutes.js";
import accountRouter from "./accountRoutes.js";

const apiv1Router = Router();

apiv1Router.use("/auth", authRouter);
apiv1Router.use("/budgets", budgetRouter);
apiv1Router.use("/transactions", transactionRouter);
apiv1Router.use("/payors", payorRouter);
apiv1Router.use("/providers", providerRouter);
apiv1Router.use("/accounts", accountRouter);

export default apiv1Router;
