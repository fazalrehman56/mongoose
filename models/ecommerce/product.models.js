import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
     name:{
        type : String,
        require : true,
        unique:true,
    
    },
    description :{
        type : String,
        require : true,
       
    },
    brand:{
        type : String,
        require : true,
        
    },
    price:{
        type : Number,
        default : 0,
    },
    category:[{
       type : mongoose.Schema.Types.ObjectId,
       ref : "Category"
    }]
},{timestamps})

const Product = mongoose.module("Product",ProductSchema);