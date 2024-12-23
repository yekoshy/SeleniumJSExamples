var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build.();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor()
}