const {config} = require('./wdio.shared.sauce.conf');

const buildName = `Android Native App Best Practices build-${new Date().getTime()}`;

config.maxInstances=20;
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'Android',
    'appium:deviceName': 'Samsung.*',
    'appium:platformVersion': '12',
    'appium:automationName': 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    'appium:app': 'storage:filename=Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
    'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity',
    'appium:allowInvisibleElements': true,
    'appium:newCommandTimeout': 240,
        // Keep the device connected between tests so we don't need to wait for the cleaning process
    'appium:noReset': true,
    'sauce:options': {
      build: buildName,
      // Select only phone devices
      // @ts-ignore
      phoneOnly: true,
      resigningEnabled: true,
      allowTouchIdEnroll: true,
      sauceLabsImageInjectionEnabled: true,
      cacheId: 'androidReal123',
      appiumVersion: '2.0.0',
    },
  },
];

exports.config = config;