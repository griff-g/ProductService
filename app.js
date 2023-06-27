import "dotenv/config";
import express from "express";
import "./config/mongo.config.js"
const app=express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.listen(PORT,()=>{
    console.log(` is listening to port ${PORT}`)
})

const index = (req,res)=>{
    res.status(200).json("working")
}

app.get('/',index)