import { Router } from "express";

const router = express.Router()


router.get("/", req, res => {

    res.send('this is the albums')
})



export default router 