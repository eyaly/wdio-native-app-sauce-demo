
// export async function restartApp() {

// 	if (driver.isAndroid){
// 		let packageName = await driver.getCurrentPackage();
// 		console.log("*** package name is " + packageName);
// 		await driver.terminateApp(packageName);
// 		await driver.activateApp(packageName);
// 	}

// };

// export function locatorStrategy(selector) {
// 	return driver.isIOS ? `id=${selector}` : `//*[@content-desc="${selector}"]`;
// };
