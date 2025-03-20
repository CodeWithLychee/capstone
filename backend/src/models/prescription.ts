import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    doctor_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paramedic_notes: { type: String },
    vitals: {
      blood_pressure: { type: String },
      spo2: { type: Number, min: 0, max: 100 },
      temperature: { type: String },
      heart_rate: { type: String },
      respiratory_rate: { type: String },
    },
    prescription: {
      history: { type: String },
      chief_complaints: { type: String },
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
        frequency_per_day: { type: String, required: true },
        duration: { type: String, required: true },
        instructions: { type: String, required: true },
      },
    ],
    referred_outside: { type: Boolean, default: false },
    rest_recommendation: { type: String },
    follow_up_date: { type: Date },

    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export default model("Prescription", schema);
