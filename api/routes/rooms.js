import express from "express";

const router = express.Router();

router.get("/register", (req,res)=>{
    res.send("hello this is rooms request!")
})

export default router