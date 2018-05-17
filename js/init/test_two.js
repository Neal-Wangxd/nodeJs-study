let fn = require('./test_one');
console.log(fn.str);
fn.test();

let myFun = require('./myFunc');
console.log(myFun.sum(1, 2, 4, 5));
console.log(myFun.avg(12, 12, 16, 12));


//核心模块
let fs = require('fs');
let fttp = require('http');
//console.log(fttp);
console.log(__filename);
console.log(__dirname);