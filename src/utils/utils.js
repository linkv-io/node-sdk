/*
 * @Author: your name
 * @Date: 2020-08-10 15:48:40
 * @LastEditTime: 2020-08-11 11:18:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/utils/utils.js
 */
function get_typeof(params) {
    return Object.prototype.toString.call(params).slice(8, -1);
}

module.exports = {
    get_typeof,
}