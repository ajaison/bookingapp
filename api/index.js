import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
dotenv.config()


    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB.")
    } catch (error) {
        throw error
    }




    mongoose.connection.on("disconnected", ()=>{
        console.log("Mongoose Disconnected!")
    })


    mongoose.connection.on("connected", ()=>{
        console.log("Mongoose Disconnected!")
    })


    app.get("/", (req,res)=>{
        res.send("hello first request!")
    })

app.listen(8800, ()=>{
    console.log("Connected to backend")
    })