const webdriverio = require('webdriverio');
const options = require('./wdio.conf.js');

function client() {
    return webdriverio.remote(options)
        .init()
        .url('/')
        .setViewportSize(options.resolution);
}

module.exports = client;
