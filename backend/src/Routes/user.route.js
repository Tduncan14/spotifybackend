import { Router } from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'


const router = router();


router.get("/", protectRoute, getAllUsers)