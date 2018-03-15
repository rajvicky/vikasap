//importing module
var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path=require("path");
var app=express();
const port=3000;
var route=require('./route/route');
app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);

app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.send("hllo vikas");

})
app.listen(port,()=>{
    console.log("server started as port: "+port);
});