const {By, Builder} = require('selenium-webdriver');

async function firstTest(params) {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/webtables');
        await driver.findElement(By.id('addNewRecordButton')).click();
        //form
        await driver.findElement(By.id('firstName')).sendKeys('testtest');
        await driver.findElement(By.id('lastName')).sendKeys('hahatest');
        await driver.findElement(By.id('userEmail')).sendKeys('fake@example.com');
        await driver.findElement(By.id('age')).sendKeys('20');
        await driver.findElement(By.id('salary')).sendKeys('10,000');
        await driver.findElement(By.id('department')).sendKeys('Localization');
      
        await driver.findElement(By.id('submit')).click();
        //Editing existing element
        let editBtn =  await driver.findElement(By.id('edit-record-3')).click();
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

firstTest()