/*
 * @Author: your name
 * @Date: 2020-08-10 15:07:04
 * @LastEditTime: 2020-08-11 10:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/lib/init.js
 */
const os = require('os');
let lib = null;

if (os.platform() === 'linux') {
    lib = require('../node/libdecrypt.n.so.node');
} else {
    lib = require('../node/libdecrypt.n.dylib.node');
}

module.exports = (appID, appSecret) => {
    if (!appID || !appSecret) return;
    try {
        if (lib === null) {
            return
        }
        const json = lib.decrypt(appID, appSecret);
        return JSON.parse(json);
    } catch (e) {
        return e
    }
}
