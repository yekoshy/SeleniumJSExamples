import { By, Builder, Key, until } from 'selenium-webdriver';

import { assert } from 'Chai';

async function loginFields(driver, username, password) {
    //username iput field
    let userNameField = await driver.findElement(By.id('username'));
    userNameField.sendKeys(username);
    userNameField.sendKeys(Key.ENTER);
    // waiting 2 seconds to see the inserted value
    await driver.sleep(2000);
    //password input field   
    let passwordField = await driver.findElement(By.id('password'));
    passwordField.sendKeys(password);
    passwordField.sendKeys(Key.ENTER);
    let submitBtn = await driver.findElement(By.id('submit'));
    // waiting 2 seconds to see the inserted value
    await driver.sleep(2000);
    submitBtn.click();
    // waiting 5 seconds
    await driver.sleep(5000);

}

describe('Testsuit for testing Login ', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://practicetestautomation.com/practice-test-login/');


    });

    afterEach(async function () {
        await driver.quit();
    });


    it('Positive LogIn test', async function () {

        await loginFields(driver, 'student', 'Password123')
        //Verify new page URL contains practicetestautomation.com/logged-in-successfully/
        let currentUrl = await driver.getCurrentUrl();
        assert.include(currentUrl, 'practicetestautomation.com/logged-in-successfully/', 'the cureent URL does not include the expected one');
        //Verify new page contains expected text ('Congratulations' or 'successfully logged in')
        let pageTxt = await driver.findElement(By.css("p.has-text-align-center > strong")).getText();
        assert.include(pageTxt, 'Congratulations' || 'successfully logged in', 'Page text doe not includ any of the give texts');

        //Verify button Log out is displayed on the new page
        let logoutBtn = await driver.findElement(By.css("div.post-content > div > div > div > a"));
        await driver.wait(until.elementIsVisible(logoutBtn), 3000);
        let btnIsdisplayed = await logoutBtn.isDisplayed();
        assert.equal(btnIsdisplayed, true)

    });
    it('Negative username test', async function () {
        await loginFields(driver, 'incorrectUser', 'Password123')
        let errotMsg = await driver.findElement(By.id("error"));
        let msgIsdisplayed = await errotMsg.isDisplayed();
        assert.equal(msgIsdisplayed, true);
        let msgTxt = await driver.findElement(By.id("error")).getText();
        assert.equal(msgTxt, 'Your username is invalid!', 'different error message is displayed');



    });

    it('Negative password test', async function () {

        await loginFields(driver, 'student', 'incorrectPassword')
        let errotMsg = await driver.findElement(By.id("error"));
        let msgIsdisplayed = await errotMsg.isDisplayed();
        assert.equal(msgIsdisplayed, true);
        let msgTxt = await driver.findElement(By.id("error")).getText();
        assert.equal(msgTxt, 'Your password is invalid!', 'different error message is displayed');



    });


});


