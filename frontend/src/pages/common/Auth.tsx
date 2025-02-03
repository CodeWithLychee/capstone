"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import { NavLink } from "react-router-dom";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function Auth() {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your signup logic here
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
                name="firstName"
                placeholder="Username"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                name="lastName"
                placeholder="Password"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          
          <NavLink to="/app/doctor">
          <Button>Create Account</Button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
