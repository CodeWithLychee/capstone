import { Request, Response } from "express";
import MedicineModel from "../models/medicine.js";

const addOrUpdateMedicine = async (req: Request, res: Response) => {
  const {
    name,
    company,
    expiry_date,
    price,
    quantity,
    description,
    batch_no,
    mfg_date,
  } = req.body;

  console.log("Request body:", req.body);

  try {
    const newMedicine = await MedicineModel.findOneAndUpdate(
      {
        $or: [{ name }, { batch_no }, { company }],
      },
      {
        name,
        company,
        expiry_date,
        price,
        quantity,
        description,
        batch_no,
        mfg_date,
      },
      {
        new: true,
        upsert: true,
      }
    );

    if (newMedicine) {
      res.status(200).json({
        success: true,
        message: "Changes saved successfully",
      });
    }
  } catch (error) {
    console.error("Error adding/updating medicine:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const dispatchMedicine = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Medicine dispatched successfully",
  });
};

const fetchInventory = async (req: Request, res: Response) => {
  const medicines = await MedicineModel.find({});

  res.status(200).json(medicines);
};

export { addOrUpdateMedicine, dispatchMedicine, fetchInventory };
