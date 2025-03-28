import express, { RequestHandler } from "express";
import { createPrescription, searchMedicines } from "../controllers/doctor.js";

const router = express.Router();

router.post("/prescription", createPrescription as RequestHandler);
router.get("/search", searchMedicines as RequestHandler);

export default router;
