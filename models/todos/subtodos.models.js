import mongoose, { Schema } from "mongoose";
const todos = new mongoose.Schema({
    item : {
        type : String,
        required : true,
    },
    complete : {
        type : String,
        requried : true,
        bolean : true,
        default : false,
    },

    createdBY :{
     type : mongoose.Schema.Type.ObjectId,
     ref : "User",
     require : true,
     
    }
},{timestamps})
const SubTodos = Schema.module("SubTodos",todos);