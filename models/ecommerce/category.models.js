import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({},{timestamps})

const Category = mongoose.module("Category",categorySchema);