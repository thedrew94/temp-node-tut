'use strict';
//we are calling a built in module and storring it in a variable
//path module
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);