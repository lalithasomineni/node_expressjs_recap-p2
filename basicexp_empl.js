const express = require("express");
const app = express();
const router = express.Router();
let port = 4000;
app.listen(port,()=>{
    console.log(`connected to the ${port}`)

})
app.get('/',(req,res)=>{
    res.status(200).send("hello world!!")
})
app.get('/profile',(req,res)=>{
    res.status(200).send("hi! dear user")
})
app.all('*',(req,res)=>{
    res.status(404).send(`<h1>resource not found<h1/>`)
})



console.log("hello")