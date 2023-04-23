const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Company = require('../models/company');

router.get('/companies', async (req, res) => {
  try {
    res.send(await Company.find());
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/create-company',async (req,res)=>{
  try{
  const cm=new Company(req.body);
  const result=await cm.save();
  res.status(201).send(result);
}catch(err){
  console.log(err);
}
});


module.exports=router;