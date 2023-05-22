import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class LoginScreen extends AppScreen {
    constructor() {
      super(locatorStrategy('login screen'));
    }

    get usernameField() {
        return $(locatorStrategy('Username input field'));
    }

    get passwordField() {
        return $(locatorStrategy('Password input field'));
    }

    get loginButton() {
        return $(locatorStrategy('Login button'));
    }

    async submitLogin({username = '', password = ''}) {
        if (username) {
        await this.usernameField.addValue(username);
        // Fail save to always see the next field
        //await hideKeyboard();
        }
        if (password) {
        await this.passwordField.addValue(password);
        // Fail save to always see the button
        //await hideKeyboard();
        }
        await this.loginButton.click();
        // Wait for animation to be done
        await driver.pause(750);
    }

    async submitLoginWithAutofill() {
        await $(locatorStrategy('bob@example.com-autofill')).click()
        await this.loginButton.click();
        // Wait for animation to be done
        await driver.pause(750);
      }
}

export default new LoginScreen();