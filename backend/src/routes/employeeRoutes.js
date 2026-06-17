import express from "express";
import * as employeeController from "../controllers/employeeController.js";
import validateEmployee from "../validations/employeeValidation.js";

const router = express.Router();

router.post("/bulk-create", employeeController.bulkCreate);
router.patch("/bulk-update", employeeController.bulkUpdate);
router.delete("/bulk-delete", employeeController.bulkDelete);

router.get("/exists/:id", employeeController.checkExists);

router.route("/")
  .get(employeeController.getAll)
  .post(validateEmployee, employeeController.create);

router.route("/:id")
  .get(employeeController.getById)
  .put(validateEmployee, employeeController.updatePut)
  .patch(employeeController.updatePatch)
  .delete(employeeController.deleteById);

export default router;
