import express, { RequestHandler } from "express";
import { createPrescription, searchMedicine } from "../controllers/doctor.js";

const router = express.Router();

router.post("/prescription", createPrescription as RequestHandler);
router.post("/search", searchMedicine as RequestHandler);

export default router;
