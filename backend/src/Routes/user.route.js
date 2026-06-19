import express from 'express'


const router = express.Router()



router.get("/", (req, res) => {
    req.auth.userId
    res.send("hi")
})



export default router