const getToken = require('./getToken');
const pushConverseData = require('./pushConverseData');

module.exports = function(im) {
    return {
        getToken: userId => getToken(im, {userId}),
        pushConverseData: data => pushConverseData(im, data),
    }
};