import { Request, Response } from "express";
import MedicineModel from "../models/medicine.js";

const dispatchMedicine = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Medicine dispatched successfully",
  });
};

const fetchInventory = async (req: Request, res: Response) => {
  const medicines = await MedicineModel.find({});

  res.status(200).json(medicines);
};

export { dispatchMedicine, fetchInventory };
