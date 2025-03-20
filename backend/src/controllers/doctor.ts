import { Request, Response } from "express";
import patientQueue from "../models/patientQueue.js";
import prescription from "../models/prescription.js";
import user from "../models/user.js";
import medicine from "../models/medicine.js";

export const getPatientQueue = async (req: Request, res: Response) => {
  try {
    const queue = await patientQueue
      .find({ status: false })
      .populate("patient_id")
      .populate("prescription_id")
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      data: queue,
    });
  } catch (error) {
    console.error("Error fetching patient queue:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const createPrescription = async (_req: Request, res: Response) => {
  //Step 1 : Save Data in Prescription Model
  try {
    const {
      user_id,
      doctor_id,
      paramedic_notes = "",
      vitals = {},
      patient_prescription = {},
      medicine = [],
      referred_outside = false,
      rest_recommendation = "",
      follow_up_date,
    } = _req.body;

    if (!user_id || !doctor_id) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: user_id or doctor_id",
      });
    }

    const newPrescription = new prescription({
      patient_id: user_id,
      doctor_id,
      paramedic_notes,
      vitals: {
        bp: vitals?.bp || "",
        spo2: vitals?.spo2 || "",
        temperature: vitals?.temperature || "",
        heart_rate: vitals?.heart_rate || "",
        bmi: vitals?.bmi || "",
        glucose: vitals?.glucose || "",
        respiratory_rate: vitals?.respiratory_rate || "",
        pregnant: vitals?.pregnant || false,
      },
      prescription: {
        history: patient_prescription?.history || "",
        co: patient_prescription?.co || "",
        allergy: patient_prescription?.allergy || "",
        investigation: patient_prescription?.investigation || "",
        diagnosis: patient_prescription?.diagnosis || "",
        prognosis: patient_prescription?.prognosis || "",
        advice: patient_prescription?.advice || "",
      },
      medicine: medicine?.map((med: any) => ({
        m_id: med?.m_id || "",
        quantity: med?.quantity || "",
        frequency: med?.frequency || "",
        duration: med?.duration || "",
        instructions: med?.instructions || "",
      })),
      referred_outside,
      rest_recommendation,
      follow_up_date,
    });

    const savedPrescription = await newPrescription.save();

    //Step 2 : Update the patientQueue model to set status = true
    const updatedQueue = await patientQueue.findOneAndUpdate(
      { patient_id: user_id, status: false },
      { status: true },
      { new: true }
    );

    //Step 3 :Update the user model by adding the prescription ID to prescriptions array
    const updatedUser = await user.findByIdAndUpdate(
      user_id,
      { $push: { prescriptions: savedPrescription._id } },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Prescription saved, patient queue updated, user updated",
      data: { prescription: savedPrescription, updatedQueue, updatedUser },
    });
  } catch (error: any) {
    console.error("Error saving prescription:", error);
    res.status(500).json({
      success: false,
      message: "Server error, could not save prescription",
      error: error.message,
    });
  }
};

export const searchMedicines = async (_req: Request, res: Response) => {
  try {
    const { query } = _req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid search query",
      });
    }

    const medicines = await medicine
      .find({
        name: { $regex: `^${query}`, $options: "i" },
      })
      .limit(10);

    res.status(200).json({
      success: true,
      data: medicines,
    });
  } catch (error) {
    console.error("Error searching for medicines:", error);
    res.status(500).json({
      success: false,
      message: "Server error, could not search medicines",
    });
  }
};
