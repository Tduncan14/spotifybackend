import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './Routes/user.route.js'
import connectDB from './lib/db.js';
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload"
import path from "path"


dotenv.config()


const __dirname = path.resolve()
const app = express();
const PORT = process.env.PORT || 5000




app.use(express.json());

app.use(clerkMiddleware()) // this will add auth to req obj => req.auth.userId
// to parse data req.body

app.use(fileUpload)({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10mb max file size
    }
})

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/main", adminRoutes)
app.use("/api/songs", songRoutes)
app.use("/api/albums", albumRoutes)
app.use("/api/stats", statsRoutes)


// error handler

app.use((err, req, res, next) => {

    res.status(500).json({
        message: process.env.NODE_ENV === "production" ? " Internal server error" : err.message
    })
})

app.listen(5000, () => {

    console.log("Server is running on PORT 5000")
    connectDB()


})