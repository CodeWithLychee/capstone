import { Router } from "express";
import {
  login,
  register,
  checkLogin,
  logout,
} from "../controllers/user.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").get(logout);
router.route("/checkLogin").get(checkLogin);
 
export default router;
