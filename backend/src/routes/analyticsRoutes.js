import express from "express";
import * as analyticsController from "../controllers/analyticsController.js";

const router = express.Router();

// Top skills
router.get("/employees/top-skills", analyticsController.getTopSkills);
// Top domains
router.get("/employees/top-domains", analyticsController.getTopDomains);
// Top certifications
router.get("/employees/top-certifications", analyticsController.getTopCertifications);
// Location distribution
router.get("/employees/location-distribution", analyticsController.getLocationDistribution);
// Experience distribution
router.get("/employees/experience-distribution", analyticsController.getExperienceDistribution);
// Project distribution
router.get("/employees/project-distribution", analyticsController.getProjectDistribution);

export default router;
