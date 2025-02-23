import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import { createToken } from "../utils/jwt.js";
import { userInterface } from "../types/user";

export const login = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  if(!name || !password){
    res.status(400).json({ message: "Field is missing" });
    return;
  }
  const data: userInterface[] = await user.find({ name: name });
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
      expires: new Date(Date.now() + 1000 * 60 * 60),
    })
    .send(user1);
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token").send("Logged out");
};

export const register = async (req: Request, res: Response) => {
  const data: userInterface = req.body;
  const check = await user.find({
    $or: [
      { email: data.email },
      { phno: data.phno },
      { staffId: data.staffId },
      { roll_no: data.roll_no },
    ],
  });
  if (check.length > 0) {
    res.status(401).json({ message: "User already exists" });
    return;
  }
  const password_hashed = await bcrypt.hash(data.password, 10);
  const new_user = new user({ ...data, password: password_hashed });
  await new_user.save();
  res.status(200).json({ message: "User registered successfully" });
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