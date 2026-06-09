import { Router } from 'express'
import { getAdmin } from '../controllers/admin.controllers.js'

const router = express.Router()


router.get("/", getAdmin)


export default router