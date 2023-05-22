import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class Menu extends AppScreen {
    constructor() {
      super(locatorStrategy('menu item catalog'));
    }

    get openMenuButton() {
        return $(
          locatorStrategy(driver.isIOS ? 'tab bar option menu' : 'open menu'),
        );
    }

    get loginButton() {
        return $(locatorStrategy('menu item log in'));
    }

    get logoutButton() {
        return $(locatorStrategy('menu item log out'));
    }

    get logoutAlertButton() {
        return $('id=android:id/button1');
    }

    async openLogin() {
        await this.loginButton.click();
    }

    async gotoLoginScreen(){
        await this.openMenuButton.click();
        await this.loginButton.click();
    } 

    async doLogout(){
        await this.openMenuButton.click();
        await this.logoutButton.click();
        if (driver.isIOS)
        {

        }
        else {
            await driver.pause(400);
            await this.logoutAlertButton.click();
            await driver.pause(400);
            await $('id=android:id/button1').click();
        }
    } 
}

export default new Menu();