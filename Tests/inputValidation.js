const { By, Builder, Key } = require('selenium-webdriver');

async function inputValidation() {

    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://testpages.eviltester.com/styled/validation/input-validation.html');
        await driver.findElement(By.id("firstname")).sendKeys("first");
        await driver.findElement(By.id("surname")).sendKeys("lastNameName");
        let age = await driver.findElement(By.id("age"));
        //await age.sendKeys(10);
        await age.sendKeys(Key.ARROW_UP);
        await driver.findElement(By.css("option[value='Ireland']")).click();
        await driver.findElement(By.id("notes")).sendKeys("Test");
        await driver.findElement(By.css("input[type='submit']")).click();
        //Back
        await driver.navigate().back();
        //Forward
        await driver.navigate().forward();
        //Back
        await driver.navigate().back();
        //Refresh
        await driver.navigate().refresh();



    } catch (e) {
        console.log(e)
    } finally {
        //await driver.quit();
    }

}

inputValidation()