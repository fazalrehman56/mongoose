import mongoose from "mongoose";

const user = new mongoose.Schema({},{timestamps})

const User = mongoose.module("User",user);