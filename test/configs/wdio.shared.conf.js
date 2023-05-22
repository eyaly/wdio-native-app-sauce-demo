exports.config = {
	// ====================
	// Runner Configuration
	// ====================
	runner: 'local',
	// ==================
	// Specify Test Files
	// ==================
	specs: [
		'./test/specs/*.spec.js',
	],

    //
    // ============
    // Capabilities
    // ============
    //
    // The capabilities are configured in:
    // - wdio.ios.local.sim.conf.js
    // - wdio.ios.sauce.sim.conf.js
    //
    // - wdio.android.local.emu.conf.js
    // - wdio.android.sauce.emu.conf.js
    //
    // The property handles how many capabilities
    // from the same test should run tests
    maxInstances: 1,

	// ===================
	// Test Configurations
	// ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'silent',
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests)
	bail: 0,
	baseUrl: 'http://localhost',
    // Default timeout for all waitForXXX commands
	waitforTimeout: 10000,
    // Timeout for any WebDriver request to a driver
	connectionRetryTimeout: 90000,
    // Maximum count of request retries to the Selenium server
	connectionRetryCount: 3,
	framework: 'jasmine',
	reporters: [ 'spec' ],
	jasmineNodeOpts: {
        // Jasmine default timeout
		defaultTimeoutInterval: 60000,
		helpers: [ require.resolve('@babel/register') ],
	},

    // ========
    // Services
    // ========
	services: [],

    // =====
    // Hooks
    // =====
    //
	before: () => {
		/**
		 * Custom property that is used to determine if the app is already launched for the first time
		 * This property is needed because the first time the app is automatically started, so a double
		 * restart is not needed.
		 */
		driver.firstAppStart = true;
	},
};
