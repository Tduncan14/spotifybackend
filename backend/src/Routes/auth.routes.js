import express from "express";
import { Usermodel } from "../models/user.model.js";
import { authCallback } from "../controllers/auth.controller.js";


const router = express.Router()



router.post("/callback", authCallback)



export default router