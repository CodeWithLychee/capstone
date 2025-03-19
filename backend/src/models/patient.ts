import { Schema, model } from "mongoose";

const schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: false },
  name: { type: String, required: true },
  roll_no: { type: String, unique: true,required: false },
  staffId: { type: String, unique: true },
  email: { type: String, unique: true, lowercase: true },
  mobile_no: { type: String, required: true },
  age: { type: String, min: 0, required: false},
  department: { type: String },
  room_no: { type: String, required: false },
  hostel: { type: String, required: false },
  year: { type: String, required: false },
  prescription: [
    {
      type: Schema.Types.ObjectId,
      ref: "Prescription",
    },
  ],
});

export default model("Patient", schema);
