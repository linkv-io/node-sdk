/*
 * @Author: your name
 * @Date: 2020-08-10 15:07:04
 * @LastEditTime: 2020-08-11 10:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/lib/init.js
 */
const os = require('os');

if (os.platform() === 'linux') {
    var lib = require('../node/libdecrypt.n.so.node');
} else {
    var lib = require('../node/libdecrypt.n.dylib.node');
}

module.exports = function (appID, appSecret) {

    if (!appID || !appSecret) return;

    try {
        const json = lib.decrypt(appID, appSecret);
        return JSON.parse(json);
    } catch (e) {
        return e
    }
}
