import mongoose from "mongoose";

const connectDB = async ()=>{
    const DB_URI = process.env.MONGODB_URI;
    try{
        await mongoose.connect(DB_URI);
        console.log("Database connected at",DB_URI);
    }catch(err){
        console.log(err);
        process.exit(1);
    };
};

export default connectDB;