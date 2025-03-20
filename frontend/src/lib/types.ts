export interface Patient {
  _id?: string;
  name: string;
  roll_no?: string;
  age: number;
  mobile_no: string;
  department: string;
  year: number;
  hostel: string;
  room_no: string;
  prescription: prescriptionInterface[];
  prescribedBy: string;
}

export interface PatientQueue {
  _id?: string;
  user_id: string;
  status: boolean;
  patient_id: {
    _id: string;
    name: string;
    roll_no?: string;
    age: string;
    gender: string;
    dob?: Date;
    email?: string;
    addr?: string;
    mobile_no: string;
    department?: string;
    year?: string;
    hostel?: string;
    room_no?: string;
    prescription: prescriptionInterface[];
    prescribedBy?: string;
  };
  prescription_id: {
    _id: string;
    patient_id: string;
    paramedic_notes: string;
    doctor_id: string;
    vitals: {
      temperature?: string;
      respiratory_rate?: string;
      bp?: string;
      spo2?: string;
      heart_rate?: string;
      bmi?: string;
      glucose?: string;
      pregnant?: boolean;
    };
    prescription: {
      history?: string;
      co?: string;
      allergy?: string;
      diagnosis?: string;
      investigation?: string;
      prognosis?: string;
      advice?: string;
    };
    medicine: {
      m_id: string;
      quantity: string;
      frequency: string;
      instructions: string;
    }[];
    date: Date;
  };
}

export interface prescriptionInterface {
  _id: string;
  patient_id: number;
  paramedic_notes: string;
  vitals: {
    temperature: string;
    respiratory_rate: string;
    bp: string;
    spo2: string;
    heart_rate: string;
    bmi: string;
    glucose: string;
    pregnant: boolean;
  };
  prescription: {
    history: string;
    co: string;
    allergy: string;
    diagnosis: string;
    investigation: string;
    prognosis: string;
    advice: string;
  };
  medicine: {
    m_id: number;
    quantity: string;
    frequency: string;
    instructions: string;
  }[];
  date: Date;
}

export interface userInterface {
  _id: string;
  name: string;
  staffId?: string;
  roll_no?: string;
  password?: string;
  role?: string;
  gender: string;
  dob?: Date;
  email?: string;
  addr?: string;
  department?: string;
  room_no?: string;
  hostel?: string;
  mobile_no: string;
  age?: string;
  year?: string;
  prescription: prescriptionInterface[] | [];
}

export interface dataPass {
  _id: string;
  name: string;
  roll_no?: string;
  age: string;
  dob?: Date;
  email?: string;
  addr?: string;
  gender: string;
  staffId?: string;
  mobile_no: string;
  department?: string;
  year?: string;
  hostel?: string;
  room_no?: string;
  prescription: prescriptionInterface[] | [];
  prescribedBy?: string;
  temperature?: string;
  respiratory_rate?: string;
  bp?: string;
  spo2?: string;
  heart_rate?: string;
  bmi?: string;
  glucose?: string;
  pregnant?: boolean;
}


export interface opdPageInterface {
  _id?: string;
  name: string;
  gender: string;
  roll_no?: string;
  age?: string;
  dob?: Date;
  email?: string;
  addr?: string;
  staffId?: string;
  mobile_no?: string;
  department?: string;
  year?: string;
  hostel?: string;
  room_no?: string;
  prescription: prescriptionInterface[] | [];
  temperature?: string;
  respiratory_rate?: string;
  bp?: string;
  spo2?: string;
  heart_rate?: string;
  bmi?: string;
  glucose?: string;
  pregnant?: boolean;
}

  