import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: false },
    patient_id: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: false,
    },
    doctor_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paramedic_notes: { type: String },
    vitals: {
      temperature: { type: String },
      respiratory_rate: { type: String },
      bp: { type: String },
      spo2: { type: Number, min: 0, max: 100 },
      heart_rate: { type: String },
    },
    prescription: {
      history: { type: String },
      co: { type: String },
      allergy: { type: String },
      diagnosis: { type: String },
      investigation: { type: String },
      prognosis: { type: String },
      advice: { type: String },
    },
    medicine: [
      {
        m_id: { type: Schema.Types.ObjectId, ref: "Medicine" },
        quantity: { type: String, required: true },
        frequency: { type: String, required: true },
        instructions: { type: String, required: true },
      },
    ],
    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export default model("Prescription", schema);
