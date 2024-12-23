import BasePage from '../utility/basepage.js';
import { By } from 'selenium-webdriver';

class DashboardPage {
  constructor(driver) {
      this.driver = driver;
      this.profileMenu = By.css('.oxd-userdropdown-name');
      this.logoutButton = By.xpath('//a[text()="Logout"]');
  }

  async verifyDashboardPageLoaded() {
      await this.driver.wait(until.elementLocated(this.profileMenu), 5000);
  }

  async logout() {
      await this.driver.findElement(this.profileMenu).click();
      await this.driver.wait(until.elementLocated(this.logoutButton), 5000);
      await this.driver.findElement(this.logoutButton).click();
  }
}

export default new DashboardPage();