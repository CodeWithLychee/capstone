import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import { createToken } from "../utils/jwt.js";
import { userInterface } from "../types/user";

export const login = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(400).json({ message: "Field is missing" });
    return;
  }
  console.log(name, password);
  const data: userInterface[] = await user.find({ name: name });
  console.log(data[0]);
  const user1 = data[0];
  const secret: any = process.env.secret;
  if (data.length === 0) {
    res.status(401).json({ message: "Name is incorrect" });
    return;
  } else {
    if (!(await bcrypt.compare(password, user1.password))) {
      console.log("wrong");
      res.status(401).json({ message: "Password is incorrect" });
      return;
    }
  }
  res
    .status(200)
    .cookie("token", createToken({ ...user1, password: "" }), {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: new Date(Date.now() + 1000 * 60 * 60),
    })
    .send(user1);
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token").send("Logged out");
};

export const register = async (req: Request, res: Response) => {
  try {
    const {
      name,
      staffId,
      roll_no,
      password,
      role,
      gender,
      phno,
      dob,
      email,
      addr,
    } = req.body;

    console.log("you are trying to register the new user ");
    // Check if user already exists
    const existingUser = await user.findOne({
      $or: [{ email }, { phno }],
      //, { staffId }, { roll_no }]
    });

    if (existingUser) {
      console.log("mai hu bhai ");
      console.log(existingUser);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new user({
      name,
      staffId,
      roll_no,
      password: hashedPassword,
      role,
      gender,
      phno,
      dob,
      email,
      addr,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkLogin = async (req: Request, res: Response) => {
  const token =
    (req.cookies && req.cookies.token) ||
    (req.headers["authorization"]
      ? JSON.parse(req.headers["authorization"])["value"]
      : null);
  const secret: any = process.env.secret;
  console.log(token);
  try {
    if (!token) {
      res.status(401).json({ message: "No token" });
    } else {
      const data: any = jwt.verify(token, secret);
      res.status(200).json(data["_doc"]);
    }
  } catch (e) {
    res.status(401).json({ message: "Invalid token" });
  }
};
