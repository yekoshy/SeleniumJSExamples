import { By, Builder, Key, until } from 'selenium-webdriver';
import { assert } from 'Chai';


async function loginFields(driver,username, password){

//insert usename
await driver.findElement(By.id("userName")).sendKeys(username);

//insert password
await driver.findElement(By.id("password")).sendKeys( password);
//click login explicit wait
//await driver.sleep(20000);
//await driver.wait(until.elementLocated(By.css("#userForm > div.mt-2.buttonWrap.row")), 20000);
//let loginBtn= await driver.wait(until.elementLocated(By.css("#userForm > div.mt-2.buttonWrap.row button#login")), 2000);
//await driver.wait(until.elementIsEnabled(loginBtn),1000);

//let loginBtn= await driver.findElement(By.xpath('//*[@id="userForm"]//div[@class="mt-2 buttonWrap row"]//button[@id="login"]'));
let loginBtn= await driver.findElement(By.id("login"));
await loginBtn.click();
await driver.sleep(3000);

}


describe('Profile page Login Testsuite', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/login');
        // Maximize the web page
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/2);");

    })

    afterEach(async function () {
         await driver.quit();
    })


    it('Profile page with Non logged in User ', async function () {
        //navigate to Profile Page with no login 
        await driver.findElement(By.css("div.element-list.collapse.show > ul > li#item-3")).click();
        //to konw where the user stands
        let currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/profile", "different page URL is displayed");
        //to double chek which text is displayed
        let notlogginLabel = await driver.findElement(By.id('notLoggin-label'));
        let notlogginText = await notlogginLabel.getText();
        //verify the text
        assert.include(notlogginText, 'please visit the login page to enter', 'different text is diaplayed');
        // navigato to Login pgae to finish the login process
        await driver.findElement(By.css("#notLoggin-label > a:nth-child(1)")).click();
        //double check that user stands on Login page 
        //await driver.sleep(30000);
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/login", "different page URL is displayed");
        //to insert valid Login credetionals
        await loginFields(driver, "UserNametest", "Test123456@");
        //to double check that the user is now on profile page 
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/profile", " second different page URL is displayed");
        // to click logout
        //to click logout button
        await driver.findElement(By.id('submit')).click();
        //verfiy that the user on login page
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/login", " third different page URL is displayed");


    });

    it('Bookstore page with Non logged in User ', async function () {
        //navigate to Bookestore Page with no login 
        await driver.findElement(By.css("div.element-list.collapse.show > ul > li#item-2")).click();
        //to konw where the user stands
        let currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/books", "different page URL is displayed");
        //to navigato back to login page to finsih the login process first
        await driver.sleep(3000);
        //to avoid the ads 
        let loginButton = await driver.findElement(By.id("login"));
        await driver.executeScript("arguments[0].scrollIntoView(true);", loginButton);
        await loginButton.click();
        //double check that user stands on Login page 
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/login", "different page URL is displayed");
        // to avoid ads
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        //to insert valid Login credetionals
        await loginFields(driver, "UserNametest", "Test123456@");
        //to double check that the user is now on bookstore page 
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/books", " second different page URL is displayed");
        // to click logout
        //to click logout button
        await driver.findElement(By.id('submit')).click();
        //verfiy that the user on login page
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://demoqa.com/login", " third different page URL is displayed");


    });

});