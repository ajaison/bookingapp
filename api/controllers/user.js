//Create User
import User from "../models/User.js";

//Update User
export const updateUser = async (re,res,next)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updateUser)
    }catch(err){
        next(err);
    }
}

//Delete User
export const deleteUser = async (re,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been Deleted")
    }catch(err){
        next(err);
    }
}

//Get Hotel
export const getUser = async (re,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err);
    }
}

//Get All User
export const getUsers = async (re,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        next(err);
    }
}