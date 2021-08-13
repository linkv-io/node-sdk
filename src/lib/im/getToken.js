/*
 * @Author: your name
 * @Date: 2020-08-10 15:11:40
 * @LastEditTime: 2020-08-18 14:38:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/src/lib/live.js
 */
const needle = require('needle');
const code = require('../../utils/code');
const getCmimToken = require('../../utils/cmimToken');
const getImSign = require('../../utils/imSign');

module.exports = function (im, data) {
    return new Promise(function (resolve, reject) {

        const { url, app_key, app_secret, app_id } = im;
        const { userId } = data;

        if (JSON.stringify(data) === '{}') {
            console.error(`参数不能为空`);
            return;
        }

        if (!userId){
            console.error(`参数错误`);
            return;
        }

        const path = '/api/rest/getToken';
        const URL = `${url}${path}`;

        const nonce = code.im_nonce();
        const timestamp = Date.now().toString().slice(0, -3);
        const cmimToken = getCmimToken(nonce, app_secret, timestamp);
        const sign = getImSign(app_id, app_key, timestamp, nonce);

        let headers = {
            nonce,
            cmimToken,
            sign,
            appKey: app_key,
            timestamp,
            appUid: userId,
            appId: app_id,
            signature: cmimToken,
        };

        let options = {
            headers
        };

        let params = {
            userId: userId
        };

        needle.post(URL, params, options, function (error, response) {
            if (!error && response.statusCode === 200) {
                let res = response.body;

                resolve({
                    status: res.code,
                    data: {
                        token: res.token
                    }
                })
            }
        });
    })
}
