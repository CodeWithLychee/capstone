"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "@/store/userContext";
import { ToastContainer,toast } from "react-toastify";

interface SignupFormData {
  name: string;
  password: string;
}

export function Auth() {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    password: "",
  });
  const {dispatch}=useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", formData);
      //console.log("Success:", response.data);
      dispatch(response.data);
      navigate("/app");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
          const { status, data } = response;
          console.log("Error Status:", status); 
          toast.error(data.message); 
        } else {
          console.log("No response from server", error.message);
        }
      } else {
        console.log("Non-Axios error:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-full">
      <ToastContainer />
      <div
        className="h-full w-full fixed flex items-center justify-center p-4 blur-sm z-[10]"
        style={{
          backgroundImage: `url("/bg.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-6 relative top-[20%] left-[20%] z-[999]">
        <div className="flex items-center gap-3">
          <img
            src="/tiet_logo.jpg"
            alt="TIET Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-2xl font-semibold text-gray-800">TIET MEDIHUB</h1>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-700">
            Log in
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-rows-2 gap-4 mb-5">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Username"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
