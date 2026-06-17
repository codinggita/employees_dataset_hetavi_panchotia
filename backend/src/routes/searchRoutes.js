import express from "express";
import * as searchController from "../controllers/searchController.js";

const router = express.Router();

// GET /employees?q=keyword
router.get("/employees", searchController.searchEmployees);

export default router;
