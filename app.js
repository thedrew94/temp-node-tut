'use strict';

//npm --version (in the terminal)
//npm i <packageName>  (to install locally dependency) | mostly used
//npm install -g <packageName>  (to istall globally)


//npm init y-
//npm init


const _ = require('lodash');

const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);