const utils = require('./utils');
//  获取随机 位数
function getRandom(num) {
    return Math.random().toString(36).substr(2, num);
}

module.exports = {
    nonce_str:  `${getRandom(8)}${utils.getNow()}${getRandom(8)}`,
    request_id: getRandom(9),
    im_nonce: getRandom(8),
};