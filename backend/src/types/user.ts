import { Schema } from 'mongoose';

export interface userInterface {
    name: string;
    staffId?: string;
    roll_no?: string;
    password: string;
    role: string;
    gender: string;
    dob?: Date;
    email?: string;
    addr: string;
    spo2?: string;
    heart_rate?: string;
    temperature?: string;
    respiratory_rate?: string;
    bp?: string;
    bmi?: string;
    glucose?: string;
    pregnant?: boolean;
    department?: string;
    room_no?: string;
    hostel?: string;
    mobile_no: string;
    age?: string;
    year?: string;
    prescription?: object[] | null;
}

export interface patientInterface {
    user_id?:object | null;
    name: string;
    roll_no?: string | null;
    staffId?: string | null;
    email?: string | null;
    mobile_no: String;
    age?: String | null;
    department?: string | null;
    room_no?: string | null;
    hostel?: string | null;
    year?:string | null;
    prescription?: object[] | null;
}

export interface prescriptionInterface {
    patient_id: Schema.Types.ObjectId;
    doctor_id: Schema.Types.ObjectId;
    paramedic_notes?: string;
    vitals: {
        temperature?: string|null;
        respiratory_rate?: string|null;
        bp?: string|null;
        spo2?: string|null;
        heart_rate?: string|null;
        bmi?: string|null;
        glucose?: string|null;
        pregnant?: boolean|null;
    };
    prescription: {
        history?: string|null;
        co?: string|null;
        allergy?: string|null;
        diagnosis?: string|null;
        investigation?: string|null;
        prognosis?: string|null;
        advice?: string|null;
    };

    medicine: {
        m_id:Schema.Types.ObjectId;
        quantity: string;
        frequency: string;
        instructions: string;
    }[];
    date: Date;
}
