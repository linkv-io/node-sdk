/*
 * @Author: your name
 * @Date: 2020-08-10 15:11:40
 * @LastEditTime: 2020-08-13 16:07:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/lib/live.js
 */
const needle = require('needle');
const sign = require('../../utils/sign');
const sort = require('../../utils/sort');
const code = require('../../utils/code');

module.exports = function (sensor, data) {
    return new Promise(function (resolve, reject) {

        const { url, app_key, app_secret } = sensor;

        if (JSON.stringify(data) === '{}') {
            console.error(`参数不能为空`);
            return;
        }

        const must = [data.liveOpenID, data.orderType, data.gold, data.expr];

        for (let index = 0; index < must.length; index++) {
            if (must[index] === undefined) {
                console.error(`参数错误`);
                return;
            }
        }

        const path = '/open/finanv0/changeGold';
        const URL = `${url}${path}`;

        const nonce_str = code.nonce_str;
        let params = {
            nonce_str,
            app_id: app_key,
            uid: data.liveOpenID,
            request_id: code.request_id,
            type: data.orderType,
            value: data.gold,
            expriation: (Date.now().toString().slice(0, -3)) + (data.expr * 86400),
        };

        if (data.reason) {
            params.reason = data.reason;
        }
        const codeStr = sort(params, nonce_str);
        const signStr = sign(app_secret, codeStr);

        params.sign = signStr;

        needle.post(URL, params, function (error, response) {
            if (!error && response.statusCode === 200) {
                let res = JSON.parse(response.body);

                resolve({
                    status: res.status,
                    msg: res.msg,
                    data: {}
                })
            }
        });
    })
}