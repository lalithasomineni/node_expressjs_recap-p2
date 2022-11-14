const express = require("express");
const app = express();
const router = express.Router();
let port = 4000;
app.listen(port,()=>{
    console.log(`connected to the ${port}`)
})
console.log("hello")