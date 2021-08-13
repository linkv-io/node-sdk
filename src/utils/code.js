/*
 * @Author: your name
 * @Date: 2020-08-10 15:20:53
 * @LastEditTime: 2021-06-16 16:42:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/code.js
 */
const utils = require('./utils');
//  获取随机 位数
function getRandom(num) {
    return Math.random().toString(36).substr(2, num);
}

const nonce_str = () => {
    return `${getRandom(8)}${utils.getNow()}${getRandom(8)}`
}

const request_id = () => {
    return getRandom(9)
}

const im_nonce = () => {
    return getRandom(8)
}

module.exports = {
    nonce_str:  nonce_str,
    request_id: request_id,
    im_nonce: im_nonce,
};
