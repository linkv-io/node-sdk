/*
 * @Author: your name
 * @Date: 2020-08-10 15:53:53
 * @LastEditTime: 2020-08-25 15:05:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/sign.js
 */
const createHash = require('crypto').createHash;

function md5(string) {
    return createHash('md5').update(string).digest('hex');
}

module.exports = function (appSecret, paramsStr) {
    if (!appSecret) {
        return console.error(`参数错误`);
    }

    return md5(`${paramsStr}&key=${appSecret}`).toLocaleLowerCase();
}
