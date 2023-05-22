const {config} = require('./wdio.shared.sauce.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'iPhone.*',
    platformName: 'iOS',
    orientation: 'PORTRAIT',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa',
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: 'iosReal123',
    noReset: false,
    newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    // Add a name to the test
    name: 'Sample App Test Name',
  },
];

exports.config = config;