import express from "express";
import * as authController from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";
import validateAuth from "../validations/authValidation.js";

const router = express.Router();

router.post("/register", validateAuth, authController.register);
router.post("/login", validateAuth, authController.login);
router.post("/refresh-token", authController.refresh);

// Protected routes
router.use(protect);
router.route("/profile")
  .get(authController.getProfile)
  .patch(authController.updateProfile);

export default router;
