/**
 * fs 文件系统
 * 异步操作文件
 */
//1.引入模块
const fs = require('fs');
//2.打开文件
//fs.open(path,flags[,mode],callback)
//callback 返回err 和 fd
fs.open('hello.txt','a',(err,fd)=>{
    //判断是否出错
    //console.log('loading');后执行
    if(!err){
        //写入文件
        fs.writeFile(fd,'这是测试异步写入!',(err)=>{
            if(!err){
                console.log('写入文件成功！');
            }else{
                throw err;
            }
            //关闭文件
            fs.close(fd,(err)=>{
                if (!err){
                    console.log('文件已保存!');
                }else{
                    throw err;
                }
            });
        })
    }else{
        throw err;
    }
});


console.log('finished');//先执行
