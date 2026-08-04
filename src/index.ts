import express from "express";
import { type Request, type Response, type NextFunction } from "express";
import config from "./config/index.js";
import apiv1Router from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api/v1", apiv1Router);

app.use((err: Error, req:Request, res:Response, next:NextFunction) => {
  console.log(err.message)
  console.log(req.baseUrl)
})

app.listen(config.port, () =>
  console.log(`Nelson backend running on port ${config.port}`),
);
