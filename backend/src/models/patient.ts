import { Schema, model } from "mongoose";

const schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: false },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  mobile_no: { type: Number },
  age: { type: Number, min: 0 },
  department: { type: String },
  prescription: [
    {
      type: Schema.Types.ObjectId,
      ref: "Prescription",
    },
  ],
});

export default model("Patient", schema);
