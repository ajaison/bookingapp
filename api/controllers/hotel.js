//Create Hotel
import Hotel from "../models/Hotel.js";

export const createHotel = async (re, res, next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
}

//Update Hotel
export const updateHotel = async (re,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updateHotel)
    }catch(err){
        next(err);
    }
}

//Delete Hotel
export const deleteHotel = async (re,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been Deleted")
    }catch(err){
        next(err);
    }
}

//Get Hotel
export const getHotel = async (re,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err);
    }
}

//Get All Hotel
export const getHotels = async (re,res,next)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        next(err);
    }
}