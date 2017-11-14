const webdriverio = require('webdriverio');
const options = process.argv.includes('sauce') ? require('./wdio.sauce.conf.js') : require('./wdio.conf.js');

function client() {
    return webdriverio.remote(options);
}

module.exports = client;
