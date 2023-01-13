'use strict';
//built in module
//can be stored in a variable or destructure 
const os = require('os');

//info about current user
const user = os.userInfo();

//method returs the system uptime in seconds
console.log(`The system uptame is ${os.uptime()}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOs);