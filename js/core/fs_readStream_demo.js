/**
 * readStream 读取流测试demo
 *
 */

//1.引入模块
let fs = require('fs');

//2.创建写入流
let rs = fs.createReadStream('C:/Users/wxd/Desktop/test.mp4');
let ws = fs.createWriteStream('../../mp4/test.mp4');

//3.创建管道
rs.pipe(ws);