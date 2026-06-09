import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './Routes/user.route.js'
import connectDB from './lib/db.js';


dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000



app.use(express.json());
// to parse data req.body

app.use("/api/users", userRoutes)
// app.use("/api/auth", authRoutes)
// app.use("/api/main", adminRoutes)
// app.use("/api/songs", songRoutes)
// app.use("/api/albums", albumRoutes)
// app.use("/api/stats", statsRoutes)


app.listen(5000, () => {

    console.log("Server is running on PORT 5000")
    connectDB()


})