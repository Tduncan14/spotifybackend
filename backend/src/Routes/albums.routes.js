import express from "express";
import { getAllAlbums, getAlbumById, getAlbumsById } from "../controllers/album.controller.js";

const router = express.Router()



router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumsById)





export default router 