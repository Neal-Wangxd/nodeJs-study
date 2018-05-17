/**
 * writeStream 写入流测试demo
 *
 */

//1.引入模块
let fs = require('fs');

//2.创建写入流
let ws = fs.createWriteStream('hello_write.txt');
//console.log(ws);

//3.打开通道
ws.once('open',()=>{
    console.log('通道打开！');
});

ws.once('close',()=>{
    console.log('通道关闭！');
});

//4.写入内容
ws.write('去玩儿');
ws.write('任天野');
ws.write('烟灰缸');
ws.write('额滴神');
ws.write('我生气');
ws.write('又何妨');

//5.关闭通道
ws.end();