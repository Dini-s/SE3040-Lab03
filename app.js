import fs from 'fs';

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

