import { Router } from "express";


const router = express.Router()



router.get("/", (res, req) => {


    res.send("songs")
})


export default router