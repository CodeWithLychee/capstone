import { dataPass } from "@/lib/types";
import React, { createContext } from "react";

export const prescriptionContext = createContext<{
  prescription: dataPass;
  setPrescription: React.Dispatch<React.SetStateAction<dataPass>>;
}>({
  prescription: {
    _id: "",
    name: "",
    email: "",
    gender: "",
    mobile_no: "",
    age: "",
    dob: new Date(),
    addr: "",
    staffId: "",
    roll_no: "",
    hostel: "",
    year: "",
    room_no: "",
    department: "",
    spo2: "",
    bp: "",
    heart_rate: "",
    bmi: "",
    glucose: "",
    respiratory_rate: "",
    pregnant: false,
    prescription: [],
  },
  setPrescription: () => {},
});
