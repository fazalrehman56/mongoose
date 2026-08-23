import mongoose from "mongoose";

const user = new mongoose.Schema({
    username:{
        type : String,
        require : true,
        unique:true,
        lowercase: true
    },
     email:{
        type : String,
        require : true,
        unique:true,
        lowercase: true
    },
    password:{
        type : String,
        require : true,
        unique:true,
        lowercase: true
    }
},{timestamps})

const User = mongoose.module("User",user);