const express=require('express');
const router=express.Router();
router.get('/nodejs',(req,res,next)=>{
res.send('retrive contact list....');
});
module.exports=router;