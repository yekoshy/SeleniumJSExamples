import {By, Builder, Key} from 'selenium-webdriver';

import {assert} from 'Chai';

import 'mocha';

describe('Testing login function', function () {
    let driver;
    
}
    beforeEach(async function(){
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://practicetestautomation.com/practice-test-login/');

        
    })
    
    afterEach(async function(){
        await driver.quit();
    })


    });

    it('Positive login test', async function(){
        await driver.findElement(By.id('username')).sendKeys('student');
        await driver.findElement(By.id('password')).sendKeys('Password123');
        await driver.findElement(By.id('submit')).click();
        await driver.wait(until.elementLocated(By.css('.post-title')), 5000);
        let successMessage = await driver.findElement(By.css('.post-title')).getText();
        assert.equal(successMessage, 'Logged In Successfully');
        await driver.findElement(By.css('a[href*="log-out"]')).click();
    });
    it('Negative username test', async function(){
        await driver.findElement(By.id('username')).sendKeys('professor');
        await driver.findElement(By.id('password')).sendKeys('Password123');
        await driver.findElement(By.id('submit')).click();
        let idErrorMessage = await.driver.findElement(By.id('error')).getText();
        assert.equal(idErrorMessage, 'Your username is invalid!');
    });
    it('Negative password test', async function(){
        await driver.findElement(By.id('username')).sendKeys('student');
        await driver.findElement(By.id('password')).sendKeys('123Password');
        await driver.findElement(By.id('submit')).click();
        let passwordErrorMessage = await.driver.findElement(By.id('error')).getText();
        assert.equal(passwordErrorMessage, 'Your password is invalid!');    
    });


});