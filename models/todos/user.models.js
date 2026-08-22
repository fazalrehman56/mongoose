import mongoose from "mongoose";
const userScheme = new mongoose.Schema({
    username:{
       type : String,
       required : true,
       unique : true
    
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password :  {
          type : String,
          required : true,
          unique : true,
    }
},{timestamps});
const User = mongoose.model("User",userScheme);