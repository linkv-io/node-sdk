/*
 * @Author: your name
 * @Date: 2020-08-10 15:20:53
 * @LastEditTime: 2020-08-25 14:37:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/code.js
 */
const utils = require('./utils');
//  获取随机 位数
function getRandom(num) {
    return Math.random().toString(36).substr(2, num);
}

module.exports = {
    nonce_str:  `${getRandom(8)}${utils.getNow()}${getRandom(8)}`,
    request_id: getRandom(9),
}