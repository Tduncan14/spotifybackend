import { Song } from "../models/song.model.js"
import { Album } from "../models/album.model.js"
import cloudinary from "../lib/Cloudinary.js"




// helper function for cloudinary uploads

const uploadToCloudinary = async (file) => {

    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",

        }
        )

        return result.secure_url
    }
    catch (error) {
        console.log("Error in uploadToCloud", error)
        throw new Error(error)
    }

}

export const createSong = async (req, res, next) => {


    try {

        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            return res.status(400).json({ message: "Please upload all files" })
        }


        const { title, artist, albumId, duration } = req.body

        const audioFile = req.files.audioFile
        const imageFile = req.files.imageFile


        const audioUrl = await uploadToCloudinary(audioFile)
        const imageUrl = await uploadToCloudinary(imageFile)

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        })


        await song.save()


        //  if a song bleongs to an album update the albums songs array

        if (albumId) {
            await Album.findByIdAndUpdate(albumId, {
                $push: { songs: song._id },
            })
        }

        res.status(201).json(song)

    }

    catch (error) {
        console.log("Error in createsong", error)
        next(error)
        // res.status(500).json({ message: "Internal server error" }, error)


    }
}