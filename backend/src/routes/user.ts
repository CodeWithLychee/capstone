import { Router, RequestHandler } from "express";
import {
  login,
  register,
  checkLogin,
  logout,
  addOpd,
  getOpdLog,
  search
} from "../controllers/user.js";
import { check } from "../middlewares/auth.js";

const router = Router();

router.route("/login").post(login as RequestHandler);
router.route("/register").post(register as RequestHandler);
router.route("/logout").get(logout as RequestHandler);
router.route("/checkLogin").post(checkLogin as RequestHandler);
router.route("/addOpd").post(check, addOpd as RequestHandler);
router.route("/getOpdLog").get(check, getOpdLog as RequestHandler);
router.route("/search").post(check, search as RequestHandler);

export default router;
