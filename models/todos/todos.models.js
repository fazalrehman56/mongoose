import mongoose from "mongoose";
const todos = new mongoose.Schema({
    content : {
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
     
    },
    subtodos : [{
        type:mongoose.Schema.Type.ObjectId,
        ref : "SubTodos"
    }]
},{timestamps})