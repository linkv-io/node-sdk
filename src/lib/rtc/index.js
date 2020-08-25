const getAuth = require('./getAuth');

module.exports = function(sensor) {
    return {
        getAuth: () => getAuth(sensor),
    }
};