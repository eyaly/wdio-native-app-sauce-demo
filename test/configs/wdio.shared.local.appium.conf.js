const {config} = require('./wdio.shared.conf');

// ======
// Appium
// ======
config.services = config.services.concat([
  [
    'appium',
    {
      // This will use the globally installed version of Appium
    //  command: 'appium',
    },

  ],
]);

//
// =====================
// Server Configurations
// =====================
//
// Tell Appium which port to use
config.port = 4723;

exports.config = config;