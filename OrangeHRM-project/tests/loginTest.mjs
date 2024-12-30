// tests/loginTest.js

import {LoginPage} from '../pages/LoginPage.js';
import { expect } from 'chai';

describe('Login Page Tests', function () {
  this.timeout(0);
  let loginPage = new LoginPage();

  before(async function () {
    await loginPage.go_to_url ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });



  it('Verify Login Page Elements', async function () {
    expect(await loginPage.isDisplayedUsername()).to.be.true;
    expect(await loginPage.isDisplayedPassword()).to.be.true;
    expect(await loginPage.isDisplayedLogin()).to.be.true;
  });

  it('Login with Valid Credentials', async function () {
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin();
  });
});
