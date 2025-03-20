import express, { RequestHandler } from "express";
import {
  getPatientQueue,
  createPrescription,
  searchMedicines,
} from "../controllers/doctor.js";

const router = express.Router();

router.get("/queue", getPatientQueue as RequestHandler);
router.post("/prescription", createPrescription as RequestHandler);
router.get("/search", searchMedicines as RequestHandler);

export default router;
