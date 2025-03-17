import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: true },
    staffId: { type: String },
    roll_no: { type: String },
    password: { type: String, required: true },
    role: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    phno: { type: Number, required: true },
    dob: { type: Date },
    email: { type: String, required: true, unique: true, lowercase: true },
    addr: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("User", schema);
