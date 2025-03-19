import { Request, Response } from "express";
import PatientQueue from "../models/patientQueue";

// Fetch all patient queue data
export const getAllPatientQueue = async (req: Request, res: Response) => {
  try {
    const queue = await PatientQueue.find().populate(
      "patient_id prescription_id"
    );
    res.status(200).json(queue);
  } catch (error) {
    console.error("Error fetching patient queue:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPatientQueueById = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;
    const patientQueueEntry = await PatientQueue.findOne({
      patient_id: patientId,
    }).populate("patient_id prescription_id");

    if (!patientQueueEntry) {
      return res.status(404).json({ message: "Patient not found in queue" });
    }

    res.status(200).json(patientQueueEntry);
  } catch (error) {
    console.error("Error fetching patient queue entry:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
