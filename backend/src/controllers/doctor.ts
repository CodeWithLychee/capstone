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
  try {
    // Step 1: Extract data from request body
    const {
      patient_id,
      doctor_id,
      paramedic_notes = "",
      vitals = {},
      patient_prescription = {},
      medicine = [],
      referred_outside = false,
      rest_recommendation = "",
      follow_up_date,
    } = _req.body;

    console.log("Controller reached: Creating prescription");

    // Step 2: Create a new prescription object
    const newPrescription = new prescription({
      patient_id,
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
      medicine: medicine.map((med: any) => ({
        m_id: med?.m_id || null,
        quantity: med?.quantity || "",
        frequency: med?.frequency || "",
        duration: med?.duration || "",
        instructions: med?.instructions || "",
      })),
      referred_outside,
      rest_recommendation,
      follow_up_date,
    });

    // Save the new prescription to the database
    const savedPrescription = await newPrescription.save();

    // Step 3: Update the PatientQueue model to set status = true

    const updatedQueue = await patientQueue.findOneAndUpdate(
      { patient_id, status: false },
      { status: true },
      { new: true }
    );

    if (!updatedQueue) {
      return res.status(404).json({
        success: false,
        message: "Patient queue not found or already updated",
      });
    }

    // Step 4: Update the User model by adding the prescription ID to prescriptions array
    const updatedUser = await user.findByIdAndUpdate(
      patient_id, // Use the patient's ID directly
      { $push: { prescription: savedPrescription._id } }, // Push prescription ID to prescriptions array
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Respond with success and data
    res.status(201).json({
      success: true,
      message:
        "Prescription saved successfully. Patient queue and user updated.",
      data: { prescription: savedPrescription, updatedQueue, updatedUser },
    });
  } catch (error: any) {
    console.error("Error saving prescription:", error);
    res.status(500).json({
      success: false,
      message:
        "An error occurred while saving the prescription. Please try again.",
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
