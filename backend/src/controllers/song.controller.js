import { Song } from '../models/song.model.js';



export const getAllSongs = async (req, res, next) => {
    try {
        //  -1 = descending newest to oldest
        // 1 = ascending olderst to neqwst

        const songs = await Song.find().sort({ createdAt: -1 });

        res.json(songs)
    }
    catch (err) {
        next(err)

    }
}



export const getFeaturedSongs = async (req, res, next) => {

    try {
        //  fetch a 6 random songs using mongodb pipelien
        const songs = await Song.aggregagte([
            {
                $sample: { size: 6 }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1
                }

            }
        ])

        res.json(songs)

    }

    catch (error) {
        next()
    }

}


export const getTrendingSongs = async (req, res, next) => {

    try {
        //  fetch a 6 random songs using mongodb pipelien
        const songs = await Song.aggregagte([
            {
                $sample: { size: 6 }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1
                }

            }
        ])

        res.json(songs)

    }

    catch (error) {
        next()
    }

}



export const getMadeForYouSongs = async (req, res, next) => {

    try {
        //  fetch a 6 random songs using mongodb pipelien
        const songs = await Song.aggregagte([
            {
                $sample: { size: 6 }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1
                }

            }
        ])

        res.json(songs)

    }

    catch (error) {
        next()
    }

}



