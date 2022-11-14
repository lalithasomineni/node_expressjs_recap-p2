const { notEqual } = require('assert');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'))


app.get('/home',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
})
app.get('/about',(req,res)=>{
    res.status(200).send(`<h1>here!we are learning html,css along with expressjs COOL!!!!</h1>`)
})
app.get('/contact',(req,res)=>{
    res.status(200).send(`<h1>let us get connected contact me at x@mail.com</h1>`)
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found!!');
})







app.listen(4000,()=>{
    console.log('successful connection')
})

console.log("hello app!!");