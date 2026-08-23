import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        
        type : String,
        require : true,
        unique:true,
        
    }
},{timestamps})

const Category = mongoose.module("Category",categorySchema);