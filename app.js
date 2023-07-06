import "dotenv/config";
import cors from "cors"
import express from "express";
import "./config/mongo.config.js"
import logger from "./logger/logger.js"
import rootRouter from "./routes/index.js"

const app=express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))

app.listen(PORT,()=>{
    console.log(`is listening to port ${PORT}`)
    // logger.info(`is listening to port ${PORT}`)
})

app.use("/api/service",rootRouter)