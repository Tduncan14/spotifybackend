import express from "express";
import dotenv from "dotenv";
import path from "path";
import fileUpload from "express-fileupload";
import { clerkMiddleware } from "@clerk/express";

import connectDB from "./lib/db.js";
import userRoutes from "./Routes/user.route.js";
import authRoutes from "./Routes/auth.routes.js"
import adminRoutes from "./Routes/admin.route.js";
import songRoutes from "./Routes/song.routes.js"
import albumRoutes from "./Routes/albums.routes.js";
import statsRoutes from "./Routes/stats.routes.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(clerkMiddleware());

// ✅ Correct way to use express-fileupload
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: path.join(__dirname, "temp"),
        createParentPath: true,
        limits: {
            fileSize: 10 * 1024 * 1024, // 10 MB
        },
    })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/main", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

// Error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        message:
            process.env.NODE_ENV === "production"
                ? "Internal server error"
                : err.message,
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
});