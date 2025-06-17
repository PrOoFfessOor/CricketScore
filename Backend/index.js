const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());


const news="cricket news"

app.get("/",(req,res)=>{
  res.json(news)
})











app.listen(5000,()=>{
  console.log("Server is running on port 5000")
})