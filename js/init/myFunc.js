/**
 * 自定义函数(文件模块)
 *  求和
 *  求平均数
 */

/**
 * exports 用来将函数内部的局部变量或局部函数暴露到外部
 * require 用来引入外部的模块
 * module 代表当前模块本身，exports就是module的属性，可以使用exports导出，也可以使用module.exports导出
 * __filename 当前文件的绝对路径
 * __dirname  当前文件所在的文件夹路径
 */

exports.sum = (...numbers)=>{
    let result = 0;
    numbers.forEach((item)=>{
        result += item;
    });
    return result;
}

exports.avg = (...numbers)=>{
    let result = 0;
    numbers.forEach((item)=>{
        result += item;
    });
    return result/numbers.length;
}