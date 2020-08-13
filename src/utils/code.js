/*
 * @Author: your name
 * @Date: 2020-08-10 15:20:53
 * @LastEditTime: 2020-08-13 14:47:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/code.js
 */

//  获取随机8位数
function getRandom() {
    return Math.random().toString(36).substr(2, 8);
}

// 获取随机32位数
function getRequestId() {
    let str = '';

    for (let index = 0; index < 4; index++) {
        str += getRandom()
    }
    return str;
}

// 获取当前秒级时间戳
function get() {
    return Date.now().toString().slice(0, -3);
}

module.exports = {
    nonce_str:  `${getRandom()}${get()}${getRandom()}`,
    request_id: getRequestId(),
}