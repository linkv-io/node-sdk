/*
 * @Author: your name
 * @Date: 2020-08-25 14:19:47
 * @LastEditTime: 2020-08-25 15:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/lib/rtc/getAuth.js
 */
const utils = require('../../utils/utils');
const createHmac = require('crypto').createHmac;

module.exports = function (rtcConfig) {
    const { app_id, app_key } = rtcConfig;
    const expire_ts = utils.getNow();

    return {
        app_id,
        auth: createHmac('sha256', app_key).update(`${app_id}${expire_ts}`).digest('hex'),
        expire_ts
    }
};