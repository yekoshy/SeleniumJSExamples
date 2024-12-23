import {BasePage} from '../utility/basepage.js';


class LoginPage extends BasePage {

  async enterUsername(username) {
    await this.setText("input[name='username']", username);
  }

  async isDisplayedUsername(){
    return await this.isDisplayed("input[name='username']");
  }

  async isDisplayedPassword(){
    return await this.isDisplayed("input[name='password']");
  }
  
  async isDisplayedLogin(){
    return await this.isDisplayed('button[type="submit"]');
  }
  async enterPassword(password) {
    await this.setText("input[name='password']", password);
  }

  async clickLogin() {
    await this.clickItem('button[type="submit"]');
  }

  async getErrorMessage() {
    return await this.getText('.oxd-alert-content-text');
  }
}

export {LoginPage};