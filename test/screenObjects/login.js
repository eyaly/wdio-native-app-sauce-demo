import { getTextOfElement } from '../helpers/utils';
import { DEFAULT_TIMEOUT } from '../helpers/e2eConstants';
import Base from './base';

class LoginScreen extends Base {
	constructor() {
		// Find by accessibility id: https://webdriver.io/docs/selectors/#accessibility-id
		super('~test-Login');
	}


    get username() {
		return $('~test-Username');
	}

	get password() {
		return $('~test-Password');
	}

    get loginButton(){
        return $('~test-LOGIN');
    }

    get errorMessage() {
		return $('~test-Error message');
	}

	/**
	 * Sign in
	 *
	 * @param {object} userDetails
	 * @param {string} userDetails.username
	 * @param {string} userDetails.password
	 */
	async signIn(userDetails = {}) {
		const { password, username } = userDetails;

		if (username && username !== '') {
			await this.username.addValue(username);
		}
		if (password && password !== '') {
			await this.password.addValue(password);
		}

		await this.loginButton.click();
	}

    /**
	 * Get the text or the error message container
	 *
	 * @return {string}
	 */
	async getErrorMessage() {
		console.log("*** in getErrorMessage ");
		await this.errorMessage.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
		console.log("*** in getErrorMessage. Go to getTextOfElement ");
		return getTextOfElement(await this.errorMessage);
	}
}
export default new LoginScreen();