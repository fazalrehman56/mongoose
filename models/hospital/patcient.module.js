import mongoose, { Schema } from "mongoose";
const pactentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    report : {
        type : String,
        requried : true,
        bolean : true,
        default : false,
    },
    desease : {
        type : String,
        require : true
    }


   
},{timestamps})
const pactent = Schema.module("pactent",pactentSchema);