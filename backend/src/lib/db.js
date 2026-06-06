import mongoose from 'mongoose'



export const connectDB = async () => {


    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('to mongo database')

    }

    catch (err) {
        console.log("error failed to connected to db")
        process.exit(1)


    }
}

export default connectDB