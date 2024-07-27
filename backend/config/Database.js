import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MONGODB CONNECTED SUCCESFULLY`)
    } catch (error) {
        console.log(`ERROR IN CONECTING DATABSE ${error}`)
    }
}

export default connectDb