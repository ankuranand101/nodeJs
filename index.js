// Readfile
// const fs = require('fs');
// const data= fs.readFileSync('files/first.txt', 'utf8');
// console.log(data);
// console.log('reading the file');



// // Asynchronous

// const fs = require('fs');
// const data= fs.readFile('files/first.txt', 'utf8',(err,data)=>{
//     // if(err){
//     //     console.log(err);
//     // }
//     // else{
//         console.log(data);
//     // }
// });
// console.log('reading the file........');


// write sync
// const fs = require('fs');
// const data= 'This is my output file';
// fs.writeFileSync('files/output.txt', data);

// Async read write
// const fs = require('fs');
// fs.readFile('files/first.txt', 'utf8', (err, data) => {
//     fs.writeFile('files/output.txt', data, ()=>{
//         console.log('done writing');
//     });
// });



// Writing by giving data
// const fs = require('fs');
// const data=('Thus is my output file');
// fs.writeFile('files/output.txt', data, ()=>{
//       console.log('done writing');
// });


// // Writing by appending data
// const fs = require('fs');
// const data=('\n This is my append data file');//extend after exisiting data
// fs.appendFile('files/output.txt', data, ()=>{
//       console.log('Successfully appended');
// });

// delete file
// const fs = require('fs');
// const data=(' This is f1 data file');
// fs.unlink('files/output1.txt', ()=>{
//       console.log('Deleted....');
// });

// create buffer
// const buf=Buffer.alloc(10);
// console.log(buf);

// creating server
// const http = require('http');
// const server= http.createServer((req, res) => {
//     res.end('Response from server');
//     console.log('Server is running....');
// });

// server.listen(8080,'127.0.0.1',()=>{
//     console.log('Server is Started....');
// });

// direct data read AND SEND TO Server'
// const http = require('http');
// const fs= require('fs');
// const server= http.createServer((req, res) => {
//     fs.readFile('files/first.txt', 'utf8', (err, data) => {
//         res.end(data);
//     });
// });

// server.listen(8080,'127.0.0.1',()=>{
//     console.log('Server is Started....');
// });



// USING URL
// const http = require('http');
// const  url=require('url');

// const server= http.createServer((req, res) => {
//     const endpoint=req.url;
//     console.log(endpoint);
//     res.end('test');
//     });

// server.listen(8080,'127.0.0.1',()=>{
//     console.log('Server is Started....');
// });


// endpoint pages setting
// const http = require('http');
// const  url=require('url');

// const server= http.createServer((req, res) => {
//     const endpoint=req.url;
//     console.log(endpoint);
//    if(endpoint=='/home'){
//     res.end('Home Page');
//    }
//    else if(endpoint=='/about'){
//     res.end('About Page');
//    }
//    else if(endpoint=='/contact'){
//     res.end('Contact Page');
//    }
//    else{
//     res.end('404 Page');
//    }
// });

// server.listen(8001,'127.0.0.1',()=>{
//     console.log('Server is Started....');
    
// });

// const http = require('http');
// const server= http.createServer((req, res) => {
//     res.end('response from server');
// });
// server.listen(8080,'127.0.0.1',()=>{
//     console.log('Server is Started....');
// });

// const http = require('http');
// const fs= require('fs');

// const server= http.createServer((req, res) => {
//     fs.readFile('files/first.txt', 'utf8', (err, data) => {
//         res.end(data);
//     });
//     res.end('response from server');
// });

// const server= http.createServer((req, res) => {
//     const endpoint=req.url;
    

//     if(endpoint==='/home'){
//         res.end('Home Page');
//     }
//     else if(endpoint==='/about'){
//         res.end('About Page');
//     }
//     else (endpoint==='/contact'){
//         res.end('Contact Page');
//     }
//     server.listen(8080,'127.0.0.1',()=>{
//         console.log('Server is Started....');
//     });
// });

//string to object
// const jsonstring = '{"name":"John","age":30,"city":"New York"}';
// const obj = JSON.parse(jsonstring);
// console.log(jsonstring);

// object to string
// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// const jsonstring = JSON.stringify(obj);
// console.log(jsonstring);
// console.log(obj);

// To read file of JSON
// const fs = require('fs');

// fs.readFile('files/first.json', 'utf8', (err, data) => {
//     const obj=JSON.parse(data);
//     console.log(obj[0].name);
// });

// const fs = require('fs');
// const data={
//     id: 1,
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// // const strdata=JSON.stringify(data);//may use this
// fs.writeFile('files/first.json', JSON.stringify(data), ()=>{
//     console.log('done writing');
// });


// const fs = require('fs');
// const http = require('http');
// const data={
//     id: 1,
//     name: 'Raj',
//     age: 22,
//     city: 'delhi'
// };
// const strdata=JSON.stringify(data);
// const server= http.createServer((req, res) => {
//     res.end(strdata);
// });
// server.listen(8080,'127.0.0.1',()=>{
//     console.log('Server is Started....');
// });