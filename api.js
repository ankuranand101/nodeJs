const http = require('http');
const fs = require('fs');
const url = require('url');
const data = fs.readFileSync('files/first.json');

const server  = http.createServer((req, res) =>{
    const endpoint = req.url;
    
    if(endpoint === '/employee'){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(data);
    }else{
        res.writeHead(404,{"content-type":"application/json"});
        res.end('invalid endpoint');
    }
})
server.listen(8080, '127.0.0.1',()=>{
    console.log('server started');
})