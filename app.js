import fs from 'fs';
import http from 'http';
import https from "https";
import open from "open";
import myModule from './my-module.js';

console.log("This is my First setup");

//example 1
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log("file content:");
    console.log(data);
});

fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World');
    res.end();
}).listen(5000);

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});


console.log(myModule.myFunction());
console.log("Additional Result :", myModule.add(5, 3));

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
const condition = true;
const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {

    console.log(error);
});

