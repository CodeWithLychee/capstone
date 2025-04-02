import { Router } from "express";
import {
  addOrUpdateMedicine,
  dispatchMedicine,
  fetchInventory,
} from "../controllers/paramedics.js";

const router = Router();

router.post("/add-medicine", addOrUpdateMedicine);
router.get("/inventory", fetchInventory);
router.post("/dispatch-medicine", dispatchMedicine);

export default router;
