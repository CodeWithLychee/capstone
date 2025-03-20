import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    patient_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: Boolean, required: true, default: false },
    prescription_id: {
      type: Schema.Types.ObjectId,
      ref: "Prescription",
      required: true,
    },
  },
  { timestamps: true }
);

export default model("PatientQueue", schema);
