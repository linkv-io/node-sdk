/*
 * @Author: your name
 * @Date: 2020-08-10 15:20:53
 * @LastEditTime: 2020-08-18 12:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/code.js
 */

//  获取随机 位数
function getRandom(num) {
    return Math.random().toString(36).substr(2, num);
}

// 获取当前秒级时间戳
function get() {
    return Date.now().toString().slice(0, -3);
}

module.exports = {
    nonce_str:  `${getRandom(8)}${get()}${getRandom(8)}`,
    request_id: getRandom(9),
}