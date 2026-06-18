import { Router } from 'express'
import { createSong, getAdmin } from '../controllers/admin.controllers.js'
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js'

const router = express.Router()


router.get("/", protectRoute, requireAdmin, createSong)


export default router