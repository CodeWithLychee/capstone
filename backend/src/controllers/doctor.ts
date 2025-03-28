import { Request, Response } from "express";
import patientQueue from "../models/patientQueue.js";
import prescription from "../models/prescription.js";

export const createPrescription = async (_req: Request, res: Response) => {
  try {
    const {
      prescription_id,
      doctor_id,
      paramedic_notes = "",
      vitals = {},
      treatment_plan = {},
      medicine = [],
      referred_outside = false,
      rest_recommendation = "",
      follow_up_date,
    } = _req.body;

    console.log("Request body:", _req.body);

    await prescription.findOneAndUpdate(
      {
        _id: prescription_id,
      },
      {
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
        treatment_plan: {
          history: treatment_plan?.history || "",
          co: treatment_plan?.co || "",
          allergy: treatment_plan?.allergy || "",
          investigation: treatment_plan?.investigation || "",
          diagnosis: treatment_plan?.diagnosis || "",
          prognosis: treatment_plan?.prognosis || "",
          advice: treatment_plan?.advice || "",
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
      }
    );

    const updatedQueue = await patientQueue.findOneAndUpdate(
      { prescription_id: prescription_id, status: false },
      { status: true },
      { new: true }
    );

    if (!updatedQueue) {
      return res.status(404).json({
        success: false,
        message: "Patient queue not found or already updated",
      });
    }

    res.status(201).json({
      success: true,
      message: "Prescription saved successfully and status set true.",
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
  } catch (error) {}
};
