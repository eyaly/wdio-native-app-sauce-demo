// import { restartApp } from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import Menu from '../screen-objects/Menu';
import LoginScreen from '../screen-objects/LoginScreen';
import { LOGIN_USERS } from '../helpers/e2eConstants';

describe('Login', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    // await restartApp();
    // await CatalogScreen.waitForIsShown(true);
    //  // logout first
    // await Menu.doLogout();
    // // Now open the login screen
    // await Menu.gotoLoginScreen();
    // await LoginScreen.waitForIsShown();
  });

  it('should be able to login with valid credentials', async () => {

    // await LoginScreen.submitLogin(LOGIN_USERS.STANDARD);
    // await expect(await CatalogScreen.isShown()).toBeTruthy();
  });

  it('should be able to login through the autofill', async () => {
    //  await LoginScreen.submitLoginWithAutofill();
    //  await expect(await CatalogScreen.isShown()).toBeTruthy();

  });

});
