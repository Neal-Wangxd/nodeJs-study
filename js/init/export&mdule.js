/**
 * export 和 module.export 对比
 *
 *
 */

/*
exports.str = 'Tony';
exports.fn = ()=>{
    console.log('Hello NodeJs');
};
exports.obj = {name:'Neal',age:26};
*/
module.exports = {
    str:'Tony',
    fn : ()=>{
        console.log('Hello NodeJs')
    },
    obj: {name:'Neal',age:26}
}