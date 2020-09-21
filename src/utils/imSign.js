const crypto = require('crypto');

function sha1(string) {
    return crypto.createHash('sha1').update(string).digest('hex').toUpperCase();
}

module.exports = function (appId,appKey,timestamp,nonce) {
    return sha1(`${appId}|${appKey}|${timestamp}|${nonce}`);
};