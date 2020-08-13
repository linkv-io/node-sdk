/*
 * @Author: your name
 * @Date: 2020-07-28 14:25:48
 * @LastEditTime: 2020-08-13 16:06:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm-node/src/index.js
 */
'use strict';

const decrypt = require('./lib/decrypt');
const live = require('./lib/live');

module.exports = function (appID, appSecret) {
    if (!appID || !appSecret) return;
    this.appID = appID;
    this.appSecret = appSecret;

    const linkv = decrypt(appID, appSecret);

    const { im, rtc, sensor } = linkv;

    this.im = function () {}
    this.rtc = function () {}
    this.live = function () {
        return live(sensor)
    }
}
