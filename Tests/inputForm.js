const {By, Builder} = require('selenium-webdriver');


async function inputForm () {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/text-box');
        await driver.findElement(By.id("userName")).sendKeys("My First Name");
        await driver.findElement(By.id("userEmail")).sendKeys("email@gmail.com");
        await driver.findElement(By.id("currentAddress")).sendKeys("Berlin, PBerg");
        await driver.findElement(By.id("permanentAddress")).sendKeys("Berlin Kreuzberg");
        await driver.findElement(By.id("submit")).submit();
    } catch (e) {
        console.log(e)
    }finally{
       // await driver.quit();
    }
    
}

inputForm()