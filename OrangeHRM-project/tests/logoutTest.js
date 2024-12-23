const DashboardPage = require('../pages/dashboardPage');

// Add a method in DashboardPage to handle logout
class DashboardPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.userDropdown = By.css('.oxd-userdropdown-name');
    this.logoutButton = By.linkText('Logout');
  }

  async logout() {
    await this.clickElement(this.userDropdown);
    await this.clickElement(this.logoutButton);
  }
}

// Test
it('Logout Functionality', async function () {
  const dashboardPage = new DashboardPage(driver);
  await dashboardPage.logout();
  // Verify redirection to login page
  expect(await loginPage.isElementDisplayed(loginPage.loginButton)).to.be.true;
});
