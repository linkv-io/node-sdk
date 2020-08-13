/*
 * @Author: your name
 * @Date: 2020-08-10 15:17:57
 * @LastEditTime: 2020-08-11 12:24:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/sort.js
 */
const utils = require('./utils');

module.exports = function (obj, nonce_str) {
    if (utils.get_typeof(obj) !== 'Object') {
        return console.error('参数错误');
    }
    obj.nonce_str = nonce_str;

    let _strArray = [];
    Object.keys(obj).sort().map(key => {
        if (obj[key]) {
            _strArray.push(`${key}=${obj[key]}`)
        }
    })

    return _strArray.join('&');
}