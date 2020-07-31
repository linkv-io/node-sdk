/*
 * @Author: your name
 * @Date: 2020-07-28 14:25:48
 * @LastEditTime: 2020-07-29 22:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm-node/src/index.js
 */
'use strict';
const os = require('os');

if (os.platform() === 'linux') {
    var lib = require('./node/libdecrypt.n.so.node');
} else {
    var lib = require('./node/libdecrypt.n.dylib.node');
}

function linkv(appID, appSecret) {
    if (!appID || !appSecret) return;
    let linkv = {};

    return {
        init: function() {
            try {
                const json = lib.decrypt(appID, appSecret);

                linkv = JSON.parse(json);
                return true;
            } catch (e) {
                return e
            }
        },
        im: {
            getConfig: function() {
                return linkv.im
            }
        },
        rtc: {
            getConfig: function() {
                return linkv.rtc
            }
        }
    }
}

module.exports = linkv;