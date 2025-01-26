import "dotenv/config"
import express from "express";
import connectDB from "./db/userdb.js";

const app = express();

app.get("/",(req,res)=>{
    res.send("hello world");
});




connectDB()

app.listen(process.env.PORT ,()=>{
    console.log("sever is running on PORT", process.env.PORT);
})