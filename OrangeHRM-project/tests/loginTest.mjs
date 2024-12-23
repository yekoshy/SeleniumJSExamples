// tests/loginTest.js
import { Builder } from 'selenium-webdriver';
import {LoginPage} from '../pages/LoginPage.js';
import { expect } from 'chai';

describe('Login Page Tests', function () {
  let loginPage = new LoginPage();

  before(async function () {
    await loginPage.go_to_url ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });


  after(async function () {
    await loginPage.quit();
  });

  it('Verify Login Page Elements', async function () {
    expect(await loginPage.isElementDisplayed(loginPage.usernameField)).to.be.true;
    expect(await loginPage.isElementDisplayed(loginPage.passwordField)).to.be.true;
    expect(await loginPage.isElementDisplayed(loginPage.loginButton)).to.be.true;
  });

  it('Login with Valid Credentials', async function () {
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin();
  });
});
