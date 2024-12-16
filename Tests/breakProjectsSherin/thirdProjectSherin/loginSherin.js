
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

describe('Login Testsuite', function () {
    let driver;

    beforeEach('befor each function', async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://demoqa.com/login');
        // Maximize the web page
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/2);");

    })

    afterEach(async function () {
         await driver.quit();
    })

   
    

    it('Negative to Login Page using Invalid Username or password and click submit', async function () {
        // insert invalid password
        await loginFields(driver, "UserNametest", "Test1");
        // to get the error message
        let error = await driver.findElement(By.id("name"));
        let errorIsdiaplyed = await error.isDisplayed()
        let errorText= await error.getText();
        assert.equal(errorIsdiaplyed, true);
        assert.equal(errorText,'Invalid username or password!','Login Credentials are correct')

    });

    it('positive Login via navigating to Profile page and then clicking logout button ', async function () {
        // data for registered user will be used "UserNametest", "Test123456@"
        await loginFields(driver, "UserNametest", "Test123456@");
        let currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl,"https://demoqa.com/profile", "different page URL is displayed" );
        //to click logout button
        await driver.findElement(By.id('submit')).click();
        //verfiy that the user on login page
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl,"https://demoqa.com/login", "different page URL is displayed" );

    });

    it('positive Login/logout and navigation to Bookstore page', async function () {
        // data for registered user will be used "UserNametest", "Test123456@"
        await loginFields(driver, "UserNametest", "Test123456@");
        let currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl,"https://demoqa.com/profile", "different page URL is displayed" );
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/2);");
        //click on go to store element
        await driver.findElement(By.id('gotoStore')).click();
        currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl,"https://demoqa.com/books", "different page URL is displayed" );

    });

    });


