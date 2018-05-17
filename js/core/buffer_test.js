/**
 * buffer 的基本使用测试
 *
 * buffer 的解构和数组很像，操作的方法也和数组类似
 * buffer 中是以二进制的方式存储数据
 * buffer 是Node自带的，不需要引入，直接使用
 *
 * 00- ff
 * 0- 255
 * 00000000 - 11111111
 * 0或1 代表1位（bit）
 * 8bit = 1B
 * 1KB = 1024B
 * 1MB = 1024KB
 * 1GB = 1024MB
 * 1TB = 1024GB
 *
 */
//老的创建方式，存在安全问题，不推荐使用
//let buffer = new Buffer(5);
//console.log(buffer);

//1.将字符串转为二进制
/*
let strc = '中国'
let str = 'Hello NodeJs';
let buffer = Buffer.from(str);
let bufferc = Buffer.from(strc);
console.log(buffer);
console.log(bufferc);
console.log(buffer.length);//一个汉字占三个字节
console.log(bufferc.length);
console.log(buffer.toString());
*/

//2.Buffer.alloc(size[,fill[,encoding]]);
//初始化：确定的长度
let buffer = Buffer.alloc(10);
buffer[0] = 10;
buffer[1] = 12;
buffer[2] = 0xfc;
buffer[20] = 2;
//console.log(buffer);
buffer.forEach((item,index)=>{
    console.log(index + "-" + item);
})