import { Router } from 'express'


const router = Router()








router.get("/", (req, res) => {
    req.auth.userId
    res.send("hi")
})



export default router