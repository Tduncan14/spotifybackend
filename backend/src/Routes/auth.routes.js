import { Router } from "express";
import { Usermodel } from "../models/user.model.js";
import { authCallback } from "../controllers/auth.controller.js";


const router = Router()



router.post("/callback", authCallback)