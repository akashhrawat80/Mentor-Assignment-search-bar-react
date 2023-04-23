const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Ad = require('../models/ads');

router.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    // if(query==null){
    //   const matchingAds=await Ad.find();
    //   res.json(matchingAds);
    // }else{
    const matchingAds = await Ad.aggregate([
      { $match: {  $or: [
          { companyId: { $regex: query, $options: 'i' } },
          { primaryText: { $regex: query, $options: 'i' } },
          { headline: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
        ], }},
      { $lookup: { from: 'companies', localField: 'companyId', foreignField: '_id', as: 'company' } },
      { $unwind: '$company' },
      { $project: { _id: 0, company: '$company.name', imageUrl: 1 } },
      { $unwind: '$imageUrl' },
    ]);

    res.json(matchingAds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/create',async (req,res)=>{
  try{
  const ad=new Ad(req.body);
  const result=await ad.save();
  res.status(201).send(result);
}catch(err){
  console.log(err);
}
});
module.exports=router;