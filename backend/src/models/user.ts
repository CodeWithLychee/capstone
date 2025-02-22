import { model, Schema } from "mongoose";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/capstone");

//mongoose.connect(process.env.MONGODB_URI as string);


const schema= new Schema({
    name: { type: String, required: true },
    staffId:{type:String},
    roll_no:{type:String},
    password:{type:String,required:true},
    role:{type:String,required:true},
    gender:{type:String,required:true},
    phno:{type:Number,required:true},
    dob:{type:Date},
    email:{type:String,required:true},
    addr:{type:String,required:true},
}
);

export default model("User", schema);
