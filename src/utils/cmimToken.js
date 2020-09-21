const createHash = require('crypto').createHash;

function md5(string) {
    return createHash('md5').update(string).digest('hex');
}

module.exports = function (noce,appSecret,timestamp) {
    let _strArray = [noce,appSecret,timestamp].sort();
    return md5(_strArray.join(''));
};