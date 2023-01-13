'use strict';

//file module
const {readFileSync, writeFileSync} = require('fs');
console.log('start');

//this is the same ad the destructured version above
// const fs = require ('fs');
// fs.readFileSync
// fs.writeFilesync

//is a function that requires 2 parameters
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first,second)

writeFileSync('./content/result-sync.txt', 
`Hello is the result ${first}, ${second}`, { flag: 'a' });

console.log('done withe this task');
console.log('starting the next one');
