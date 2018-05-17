/**
 * fs 文件系统
 * 异步读取文件
 */
//1.引入模块
const fs = require('fs');
//2.读取文件
/*fs.readFile('hello_write.txt',(err,data)=>{
    if(!err){
        console.log(data.toString());
    }else{
        throw err;
    }
});*/

//3.图片
/*fs.readFile('C:\\Users\\wxd\\Desktop\\head.JPG',(err,data)=>{
    if(!err){
        fs.writeFile('../../images/head.jpg',data,(err)=>{
            if(!err){
                console.log('写入图片成功！');
            }else{
                throw err;
            }
        })
    }else{
        throw err;
    }
});*/

//4.视频
fs.readFile('C:\\Users\\wxd\\Desktop\\test.mp4',(err,data)=>{
    if(!err){
        fs.writeFile('../../mp4/test.mp4',data,(err)=>{
            if(!err){
                console.log('写入视频成功！');
            }else{
                throw err;
            }
        })
    }else{
        throw err;
    }
});