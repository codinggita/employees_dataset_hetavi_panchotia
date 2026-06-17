import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./middlewares/loggerMiddleware.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/v1/auth", authRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
