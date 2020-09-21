const utils = require('../../utils/utils');
const createHmac = require('crypto').createHmac;

module.exports = function (rtcConfig) {
    const { app_id, app_key } = rtcConfig;
    const expire_ts = utils.getNow();

    return {
        app_id,
        auth: createHmac('sha1', app_key, ).update(`${app_id}${expire_ts}`).digest('hex'),
        expire_ts
    }
};