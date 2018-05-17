/**
 * fs 文件系统
 * 同步操作文件
 */
//1.引入模块
const fs = require('fs');
//2.打开文件
//fs.openSync(path,flags[,mode])
/*
 * path 路径
 * flags 读写标识 w写 r读
 */
let fd = fs.openSync('hello.txt','w');
//console.log(fd);//3 写入标识
//3.写入内容
/*fs.writeFileSync(file, data[, options])
 *
 * file 文件名或文件描述符
 * data 内容
 * options 设置编码之类的
 */
fs.writeFileSync(fd,'Hello NodeJs, 你好 NodeJs！');
//4.保存并退出
fs.closeSync(fd);
