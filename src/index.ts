import express from "express";
import { type Request, type Response, type NextFunction } from "express";
import config from "./config/index.js";
import apiv1Router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/v1", apiv1Router);

app.use(errorHandler)

app.listen(config.port, () =>
  console.log(`Nelson backend running on port ${config.port}`),
);
