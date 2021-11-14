const express = require("express");
const app = express();
const path  = require('path');
const PORT = process.env.PORT || 8080

//const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname,+'/public/contactform.html')
})

app.post('/',(req,res)=>{
    console.log(req.body)

    try{
        res.status(200).json({status:true});

    }catch(err){
        res.status(500).json({status:false})
    }
})
app.listen(PORT,'0.0.0.0',()=>{
    console.log('server running on port $(PORT)')
})