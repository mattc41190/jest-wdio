module.exports = {
    // WDIO OPTIONS
    // Selenium Server Options (All set to defaults)
    host: '127.0.0.1',
    port: 4444,
    protocol: 'http',
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    // Webdriverio Logging Options
    logLevel: 'silent', // Note: Verbose logs collected at `command.logs`
    coloredLogs: true,
    logOutput: './test/command.logs',

    // Browser Options
    baseUrl: 'https://www.homeaway.com',
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless']
        }
	},

    // Test Options
    bail: 0, // All tests will run regardless of number of failures
    debug: false,
    screenShotPath: './test/browser-error-shots',
    screenshotOnReject: true,
    waitforTimeout: 5000,
    waitforInterval: 500  
}
