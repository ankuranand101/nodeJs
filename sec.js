const fs = require('fs').promises;
fs.readFile('files/first.txt','utf-8').then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})