import { body, validationResult } from "express-validator";

const validateEmployee = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),
  
  body("email")
    .isEmail()
    .withMessage("Must be a valid email"),
  
  body("phone")
    .notEmpty()
    .withMessage("Phone is required"),
  
  body("experience")
    .isFloat({ min: 0 })
    .withMessage("Experience must be greater than or equal to 0"),
  
  body("primarySkill")
    .notEmpty()
    .withMessage("Primary skill is required"),

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

export default validateEmployee;
