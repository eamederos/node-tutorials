const path = require('path')

console.log(path.sep);

//building a path

const filePath = path.join('/content','folder','subfolder','test.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname,'content','folder','subfolder','test.txt');
console.log(absolute);