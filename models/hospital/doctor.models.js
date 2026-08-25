import mongoose, { Schema } from "mongoose";
const DoctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    qualifications : {
        type : String,
        requried : true,
        
    },
     Experties : {
        type : [String],
        require : true
    },
    experince :{
        type : Number,
        require : true,
    },
    workingHour:{
      type : Number,
        required : true,
    },
    expectedSalry : {
        type:Number,
        requried : true,
    }

   
},{timestamps})
const Doctor = Schema.module("Doctor",DoctorSchema);