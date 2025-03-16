// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import Button from "@/components/Button";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { userContext } from "@/store/userContext";
// import { ToastContainer, toast } from "react-toastify";
// import { api } from "../../lib/utils";

// interface SignupFormData {
//   name: string;
//   password: string;
// }

// export function Auth() {
//   const [formData, setFormData] = useState<SignupFormData>({
//     name: "",
//     password: "",
//   });
//   const { dispatch } = useContext(userContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await api.post(`/user/login`, formData);
//       //console.log("Success:", response.data);
//       dispatch(response.data);
//       navigate("/app");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const { response } = error;
//         if (response) {
//           const { status, data } = response;
//           console.log("Error Status:", status);
//           toast.error(data.message);
//         } else {
//           console.log("No response from server", error.message);
//         }
//       } else {
//         console.log("Non-Axios error:", error);
//       }
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="h-screen w-full">
//       <ToastContainer />
//       <div
//         className="h-full w-full fixed flex items-center justify-center p-4 blur-sm z-[10]"
//         style={{
//           backgroundImage: `url("/bg.jpeg")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-6 relative top-[20%] left-[20%] z-[999]">
//         <div className="flex items-center gap-3">
//           <img
//             src="/tiet_logo.jpg"
//             alt="TIET Logo"
//             width={40}
//             height={40}
//             className="object-contain"
//           />
//           <h1 className="text-2xl font-semibold text-gray-800">TIET MEDIHUB</h1>
//         </div>

//         <div>
//           <h2 className="text-xl font-medium text-gray-700">Log in</h2>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-rows-2 gap-4 mb-5">
//             <div>
//               <Input
//                 type="text"
//                 name="name"
//                 placeholder="Username"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                 required
//               />
//             </div>
//             <div>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                 required
//               />
//             </div>
//           </div>
//           <Button>Login</Button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "@/store/userContext";
import { ToastContainer, toast } from "react-toastify";
import { api } from "../../lib/utils";

interface AuthFormData {
  name: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  role?: string;
  gender?: string;
  phno?: string;
  dob?: string;
  addr?: string;
}

export function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    gender: "",
    phno: "",
    dob: "",
    addr: "",
  });

  const { dispatch } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }
        const response = await api.post(`/user/register`, formData); // ✅ Corrected route
        toast.success("Signup successful! Please log in.");
        setIsSignup(false); // Switch to login after signup
      } else {
        const response = await api.post(`/user/login`, formData);
        dispatch(response.data);
        navigate("/app");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
          toast.error(response.data.message);
        } else {
          console.log("No response from server", error.message);
        }
      } else {
        console.log("Non-Axios error:", error);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            {isSignup ? "Sign Up" : "Log in"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-rows-2 gap-4 mb-5">
            <Input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
            {isSignup && (
              <>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <Input
                  type="text"
                  name="phno"
                  placeholder="Phone Number"
                  value={formData.phno}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <Input
                  type="text"
                  name="addr"
                  placeholder="Address"
                  value={formData.addr}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                {/* Role Selection */}
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="doctor">Doctor</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="pharmacist">Pharmacist</option>
                </select>
                {/* Gender Selection */}
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </>
            )}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
            {isSignup && (
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            )}
          </div>
          <Button>{isSignup ? "Sign Up" : "Login"}</Button>
        </form>

        <p
          className="text-center text-sm text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Log in"
            : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
}
