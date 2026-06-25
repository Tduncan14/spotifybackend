import { Album } from '../models/album.model.js'


export const getAllAlbums = async (req, res, next) => {

    try {

        const albums = await Album.find();
        res.status(200).json(albums)
    }
    catch (err) {
        next(err)
    }

}



export const getAlbumsById = async (req, res, next) => {

    try {
        const { albumId } = req.albums
        const album = await Album.findById(albumId).populate("songs")



        if (!album) {
            return res.status(404).json({ message: "Album not found" })
        }


        res.status(200).json(album)

    }

    catch (error) {
        next(erro)

    }



}