const express = require("express");
const app = express();
app.use(express.json());
const arr = [{
    "name": "x",
    "occupation": "y"
},{
    "name": "g",
    "occupation": "h"
},{
    "name": "m",
    "occupation": "l"
}]

app.get("/allitems",(req,res)=>{
    res.json({users :arr });
})

app.post("/adduser",(req,res)=>{
    let newUser = {name:req.body.name,occupation:req.body.occupation};
    arr.push(newUser);
    res.json({users :arr });
})

app.delete("/removeuser",(req,res)=>{
    arr.pop();
    res.json({users :arr });
})
app.listen(5000,()=>{
    console.log("listening to port 5000!!")
})
//console.log("basic routes");