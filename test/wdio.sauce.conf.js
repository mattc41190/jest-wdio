const credentials = require('./credentials.json');
const baseConf = require('./wdio.conf.js');

module.exports = Object.assign(baseConf, {
    user: credentials.user,
    key: credentials.key,
    protocol: 'http',
    host: 'ondemand.saucelabs.com',
    port: 80,
    desiredCapabilities: {
        browserName: 'chrome',
        tunnelIdentifier: 'sewer' // Note: I create my own sauce connect tunnel
    }
});
