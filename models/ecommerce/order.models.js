import mongoose, { mongo } from "mongoose";
const AdreesSchema = new mongoose.Schema({
    country:{
        type : String,
        require : true,
    },
    exc_location:{
        type : String,
        require : true,
    },
    PostNum:{
         type: number,
    }
})
const quantity = new mongoose.Schema({
    producdID:{
      type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
     totalItems:{
        type : number,
        require : true,
    }
})
const orderSchema = new mongoose.Schema({
     user_name:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    user_email:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    adrees:{
         type : [AdreesSchema]
    },
   quantity:{
         type : [quantity]
   },
   priceTotal:{
        type : number,
        default : 0,
   }
   
       
    
},{timestamps})

const Order = mongoose.module("Order",orderSchema);