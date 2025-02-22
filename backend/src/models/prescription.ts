import { Schema } from "mongoose";
import { model } from "mongoose";


const schema= new Schema({
    user_id: { type: String, required: true },
    paramedic_notes:{type:String},
    vitals:{
        temperature:{type:String},
        respiratory_rate:{type:String},
        bp:{type:String},
        spo2:{type:Number},
        heart_rate:{type:String},
    },
    prescription:{
        history:{type:String},
        co:{type:String},
        allergy:{type:String},
        diagnosis:{type:String},
        investigation:{type:String},
        prognosis:{type:String},
        advice:{type:String},
    },
    medicine:{
        m_id:{type:Schema.Types.ObjectId,ref:"Medicine"},
        quantity:{type:String},
        frequency:{type:String},
        instructions:{type:String},
        required:true,
    },
    date:{type:Date,required:true},
});

export default model("Prescription", schema);
