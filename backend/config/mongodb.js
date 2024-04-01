import mongoose from "mongoose";
import colors from 'colors'

const connectDB=async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_uRI)
        console.log(`mongoDB connected : ${conn.connection.host}` .green.underline)
    }
    catch(error){
        console.error(`${error.message}`.red.underline)
        process.exit(1)
    }
}
export default connectDB