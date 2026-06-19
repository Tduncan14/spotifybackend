import express from 'express'
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from '../controllers/admin.controllers.js'
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js'


const router = express.Router()


// can also do 

// router.use(protectRoute,requireAdmin)




router.get("/check", protectRoute, requireAdmin, checkAdmin)


router.post("/songs", protectRoute, requireAdmin, createSong)

router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong)

router.post("/albums", protectRoute, requireAdmin, createAlbum)
router.post("/albums/:id", protectRoute, requireAdmin, deleteAlbum)



export default router