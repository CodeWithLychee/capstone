import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const api = axios.create({
//   baseURL: "https://capstone1-7iw4.onrender.com",
//   withCredentials: true,
// });

// import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
