import { body, validationResult } from "express-validator";

const validateAuth = [
  body("email")
    .isEmail()
    .withMessage("Must be a valid email address"),
  
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  }
];

export default validateAuth;
