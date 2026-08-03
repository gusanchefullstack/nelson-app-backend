import { Router } from "express";
import  { type Request, type Response } from "express";

const apiv1Router = Router();

apiv1Router.get("/users", (req: Request, res: Response) => {
  res.json({ message: "Users Router" });
});
apiv1Router.get("/budgets", (req: Request, res: Response) => {
  res.json({ message: "Budgets Router" });
});
apiv1Router.get("/transactions", (req: Request, res: Response) => {
  res.json({ message: "Transactions Router" });
});
apiv1Router.get("/accounts", (req: Request, res: Response) => {
  res.json({ message: "Accounts Router" });
});
apiv1Router.get("/payors", (req: Request, res: Response) => {
  res.json({ message: "Payors Router" });
});
apiv1Router.get("/providers", (req: Request, res: Response) => {
  res.json({ message: "Providers Router" });
});

export default apiv1Router