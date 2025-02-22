import React, { createContext} from "react";

export const userContext = createContext<{
  user: {
    _id: string;
    name: string;
    email: string;
    gender: string;
    role: string;
    phno: number;
    dob: Date;
    addr: string;
    staff_id: string;
    roll_no: string;
  };
  dispatch: React.Dispatch<
    React.SetStateAction<{
      _id: string;
    name: string;
    email: string;
    gender: string;
    role: string;
    phno: number;
    dob: Date;
    addr: string;
    staff_id: string;
    roll_no: string;
    }>
  >;
}>({
  user: {
    _id: "",
    name: "",
    email: "",
    gender: "",
    role: "",
    phno: 0,
    dob: new Date(),
    addr: "",
    staff_id: "",
    roll_no: "",
  },
  dispatch: () => {},
});


