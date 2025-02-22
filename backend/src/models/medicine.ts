import { Schema } from "mongoose";
import { model } from "mongoose";

const schema= new Schema({
    name: { type: String, required: true },
    company:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    expiry_date:{type:Date},
    mfg_date:{type:Date},
    batch_no:{type:String},
    description:{type:String},
}); 

export default model("Medicine", schema);