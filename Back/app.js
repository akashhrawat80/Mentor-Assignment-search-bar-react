const express = require('express');
const cors=require("cors");
const connectDB=require("./db/connectDb.js");
const adsController=require("./controller/adsController.js");
const companyController=require("./controller/companyController.js");
const app=express();
const port=process.env.PORT ||'5000';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectDB(DATABASE_URL);
app.use(cors());
app.use(express.json());
app.use('/api',adsController);
app.use('/',companyController);

app.listen(port,()=>{
    console.log(`server running at:${port}`);
})
