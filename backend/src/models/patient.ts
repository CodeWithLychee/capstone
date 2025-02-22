import { Schema } from "mongoose";
import { model } from "mongoose";

const schema= new Schema({
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile_no: { type: Number},
    age: { type: Number},
    department: { type: String},
});

export default model("Patient", schema);