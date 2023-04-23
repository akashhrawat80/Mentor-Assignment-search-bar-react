//import mongoose from 'mongoose';
const mongoose=require("mongoose");

const adSchema = new mongoose.Schema({
  _id:{type:String,required: true, text: true},
  companyId: { type: String, required: true,text: true },
  primaryText: { type: String, required: true,text: true },
  headline: { type: String, required: true,text: true },
  description: { type: String, required: true,text: true },
  CTA: { type: String, required: true,text: true },
  imageUrl: { type: String, required: true,text: true },
});

const Ad = mongoose.model('Ad', adSchema);
module.exports = Ad;
