import { Router } from "express";
import { dispatchMedicine, fetchInventory } from "../controllers/paramedics.js";

const router = Router();

router.get("/inventory", fetchInventory);
router.post("/dispatch-medicine", dispatchMedicine);

export default router;
