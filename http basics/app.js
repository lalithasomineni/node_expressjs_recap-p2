const http = require("http");
const { code } = require("statuses");
const port = require("./.env");
const fs = require('fs');
const server = http.createServer((req,res)=>{
  if(req.url==='/'){
     let result = fs.readFileSync('./index.html')
    res.end(result);
  }
    res.end('sorry');
}).listen(5000);
/*const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log(req.url);
        res.writeHead(200,{
            'content-type':'text/html'
        })
        res.write(`<h1>welcome</h1>
        <p>hey!you</p>`);
        res.end();
    }
    if(req.url === '/about'){
        console.log(req.url);
        res.writeHead(200,{
            'content-type':'text/html'
        })
        res.write(`<h1>this is built for learning http headers</h1>
        <p>milestones !!! yippeeeeee</p>`);
        res.end();
    }
    console.log(req.url);
    res.statusCode = 404;
    res.end("page not found!!")
    res.statusCode = 404;
    res.end("page not found!!")
    }).listen(process.env.port);*/

console.log("hello world")
