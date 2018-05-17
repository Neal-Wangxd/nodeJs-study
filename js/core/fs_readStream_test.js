/**
 * readStream 读取流测试demo
 *
 */

//1.引入模块
let fs = require('fs');

//2.创建写入流
let rs = fs.createReadStream('C:/Users/wxd/Desktop/test.mp4');
let ws = fs.createWriteStream('../../mp4/test.mp4');

//3.监听流的打开和关闭
rs.once('open',()=>{
    console.log('读取通道打开！');
});
rs.once('close',()=>{
    console.log('读取通道关闭！');
});
ws.once('open',()=>{
    console.log('写入通道打开！');
});
ws.once('close',()=>{
    console.log('写入通道关闭！');
});


//4.绑定data
rs.on('data',(data)=>{
    ws.write(data);
});