import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./middlewares/loggerMiddleware.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/search", searchRoutes);
app.use("/api/v1", analyticsRoutes);
app.use("/api/v1/stats", statsRoutes);
app.use("/employees", employeeRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
