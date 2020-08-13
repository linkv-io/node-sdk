/*
 * @Author: your name
 * @Date: 2020-08-11 10:31:28
 * @LastEditTime: 2020-08-13 16:06:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/lib/live/index.js
 */

const thgetToken = require('./thgetToken');
const orderSuccess = require('./orderSuccess');
const changeGold = require('./changeGold');
const getUserTokens = require('./getUserTokens');

module.exports = function (sensor) {
    return {
        thgetToken: (data = {}) => thgetToken(sensor, data),
        orderSuccess: (data = {}) => orderSuccess(sensor, data),
        changeGold: (data = {}) => changeGold(sensor, data),
        getUserTokens: (data = {}) => getUserTokens(sensor, data),
    }
}

