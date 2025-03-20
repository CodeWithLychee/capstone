import { Schema } from "mongoose";

export interface userInterface {
  _id?: string;
  name: string;
  staffId?: string;
  roll_no?: string;
  password: string;
  role: string;
  gender: string;
  dob?: Date;
  email?: string;
  addr: string;
  department?: string;
  room_no?: string;
  hostel?: string;
  mobile_no: string;
  age?: string;
  year?: string;
  prescription?: prescriptionInterface[] | null;
}

export interface prescriptionInterface {
  patient_id: Schema.Types.ObjectId;
  doctor_id: Schema.Types.ObjectId;
  paramedic_notes?: string;
  vitals: vitalsInterface;
  prescription: {
    history?: string | null;
    co?: string | null;
    allergy?: string | null;
    diagnosis?: string | null;
    investigation?: string | null;
    prognosis?: string | null;
    advice?: string | null;
  };

  medicine: {
    m_id: Schema.Types.ObjectId;
    quantity: string;
    frequency: string;
    instructions: string;
  }[];
  date: Date;
}

export interface vitalsInterface {
  temperature?: string | null;
  respiratory_rate?: string | null;
  bp?: string | null;
  spo2?: string | null;
  heart_rate?: string | null;
  bmi?: string | null;
  glucose?: string | null;
  pregnant?: boolean | null;
}
