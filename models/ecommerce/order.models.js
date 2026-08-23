import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({},{timestamps})

const Order = mongoose.module("Order",orderSchema);