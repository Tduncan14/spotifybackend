import { Router } from 'express'


const router = express.Router()


router.get("/", (req, res) => {

    res.send('this is the stats')
})



export default router