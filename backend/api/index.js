const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({msg: "Welcome to SPIE API"})
  })

module.exports=router