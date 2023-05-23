import express from "express";
import {register, login, changePassword} from "../controllers/authControllers.js"

const router = express.Router();
router.post("/reg", register)
router.post("/login", login)
router.post("/changePassword", changePassword)

export default router