import { Router } from 'express'
import { createAlbum, createSong, deleteSong, getAdmin } from '../controllers/admin.controllers.js'
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js'

const router = express.Router()


router.post("/songs", protectRoute, requireAdmin, createSong)

router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong)

router.post("/albums", protectRoute, requireAdmin, createAlbum)
router.post("/albums/:id", protectRoute, requireAdmin, deleteAlbum)



export default router