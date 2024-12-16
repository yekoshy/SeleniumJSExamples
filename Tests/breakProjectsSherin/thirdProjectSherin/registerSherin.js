import { By, Builder, Key, until } from 'selenium-webdriver';
import { assert } from 'Chai';
/* three use cases will be tested  through this test suit
first use case: Negative register using invalied passwors.
second used case : Possitive regirster test.
third use case: double check if the user exists 
*/
async function registerFields(driver, firstName, lastName, userName, passWord) {
    //click on NewUser button
    await driver.findElement(By.id("newUser")).click();
    //inserting the fistname
    await driver.findElement(By.id("firstname")).sendKeys(firstName);
    //inserting the lastname
    await driver.findElement(By.id("lastname")).sendKeys(lastName, Key.ENTER);
    //inserting the username
    await driver.findElement(By.id("userName")).sendKeys(userName, Key.ENTER);
    //inserting the password
    await driver.findElement(By.id("password")).sendKeys(passWord, Key.ENTER);
    // scroll down to see the whole page
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);")
    // select Captcha through switisching  to ifram 
    let iframe = await driver.wait(
        until.elementLocated(By.css("iframe[title='reCAPTCHA']")),
        5000
    );
    // Switch to the frame
    await driver.switchTo().frame(iframe);
    let captchaCheckbox = await driver.wait(
        until.elementLocated(By.css(".recaptcha-checkbox-border")),
        10000
    );
    await driver.wait(until.elementIsVisible(captchaCheckbox), 1000);
    await driver.wait(until.elementIsEnabled(captchaCheckbox), 1000);
    await captchaCheckbox.click();
    // to handel the recaptcha image manaully 
    await driver.sleep(30000);
    // Switch back to the main document
    await driver.switchTo().defaultContent();
    //click sumbit 

    await driver.findElement(By.id("register")).click();

}



describe('Register New User Test', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/login');
        // Maximize the web page
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");

    })

    afterEach(async function () {
       // await driver.quit();
    })


    it.skip('Negative Register test', async function () {
        await registerFields(driver,"first", "last","UserNametest","12")
       let error= await driver.findElement(By.id("name"))
       let errorIsdiaplyed=  await error.isDisplayed()
       assert.equal(errorIsdiaplyed, true);
    


    });
   
    it.skip('positive Register test', async function () {
        
        await registerFields(driver,"first", "last","UserNametest","Test123456@")
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        assert.equal(alertText, "User Register Successfully.");
         //Accept 
         await alert.accept();
    
        // back to Login page
        await driver.findElement(By.id("gotologin")).click();

    });

    it(' Register exisitng User', async function () {

        await registerFields(driver, "first", "last", "UserNametest", "Test123456@")
        let error = await driver.findElement(By.id("name"));
        let errorIsdiaplyed = await error.isDisplayed()
        let errorText= await error.getText();
        assert.equal(errorIsdiaplyed, true);
        assert.equal(errorText,'User exists!','it is a new user')


    });



});