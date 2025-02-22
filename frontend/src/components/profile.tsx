import React, { useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../store/userContext";

export default function Profile({ children }: { children: React.ReactNode }) {
  const [user, dispatch] = useState<{
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
  }>({
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
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/api/user/checkLogin`);
      const data= response.data;
      console.log(data);
      dispatch(data);
    };
    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
