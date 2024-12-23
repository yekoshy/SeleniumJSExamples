import {BasePage} from '../utility/basepage.js';
import { By } from 'selenium-webdriver';

class LoginPage extends BasePage {
  
    constructor() {
    super();
    this.usernameField = By.name('username');
    this.passwordField = By.name('password');
    this.loginButton = By.css('button[type="submit"]');
    this.errorMessage = By.css('.oxd-alert-content-text');
  }

  async enterUsername(username) {
    await this.enterText(this.usernameField, username);
  }

  async enterPassword(password) {
    await this.enterText(this.passwordField, password);
  }

  async clickLogin() {
    await this.clickElement(this.loginButton);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }
}

export {LoginPage};