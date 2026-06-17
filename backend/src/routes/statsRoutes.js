import express from "express";
import * as statsController from "../controllers/statsController.js";

const router = express.Router();

// Overview statistics
router.get("/overview", statsController.getOverview);

export default router;
