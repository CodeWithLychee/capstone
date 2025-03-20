import { prescriptionInterface } from "@/lib/types";
import React, { createContext} from "react";

export const userContext = createContext<{
  user: {
    _id: string;
    name: string;
    email?: string;
    gender: string;
    role?: string;
    mobile_no: string;
    dob?: Date;
    addr?: string;
    staffId?: string;
    roll_no?: string;
    hostel?: string;
    year?: string
    room_no?: string;
    department?: string;
    prescription:prescriptionInterface[] | [];
  };
  dispatch: React.Dispatch<
    React.SetStateAction<{
      _id: string;
    name: string;
    email?: string;
    gender: string;
    role?: string;
    mobile_no: string;
    dob?: Date;
    addr?: string;
    staffId?: string;
    roll_no?: string;
    hostel?: string;
    year?: string
    room_no?: string;
    department?: string;
    prescription:prescriptionInterface[] | [];
    }>
  >;
}>({
  user: {
    _id: "",
    name: "",
    email: "",
    gender: "",
    role: "",
    mobile_no: "",
    dob: new Date(),
    addr: "",
    staffId: "",
    roll_no: "",
    hostel: "",
    year: "",
    room_no: "",
    department: "",
    prescription:[],
  },
  dispatch: () => {},
});


