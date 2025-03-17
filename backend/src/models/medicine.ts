import { Schema, model } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  company: { type: String },
  price: { type: Number, min: 0 },
  quantity: { type: Number, min: 0 },
  expiry_date: { type: Date },
  mfg_date: { type: Date },
  batch_no: { type: String },
  description: { type: String },
});

export default model("Medicine", schema);
