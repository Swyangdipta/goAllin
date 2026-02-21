import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req,res)=>{

res.send("Auth Service Running 🔥");

});

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{

console.log(`User Service running on port ${PORT}`);

});