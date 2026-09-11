import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);
app.use("/auth", authRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
