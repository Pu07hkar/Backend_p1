import "dotenv/config"
import express from "express"
import bodyParser from "body-parser";
import connectDB from "./db/userdb.js";
import  router  from "./routes/user.route.js";

const app = express();

app.use(bodyParser.json())
// app.use(urlencoded())

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.use("/api/users", router)





connectDB()

app.listen(process.env.PORT ,()=>{
    console.log("sever is running on PORT", process.env.PORT);
})