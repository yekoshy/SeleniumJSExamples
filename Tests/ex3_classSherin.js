const {By, Builder} = require('selenium-webdriver');

async function addEditRmove(p) {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/webtables');
        await driver.findElement(By.id('addNewRecordButton')).click();
        await driver.findElement(By.id('firstName')).sendKeys('first');
        await driver.findElement(By.id('lastName')).sendKeys('last');
        await driver.findElement(By.id('userEmail')).sendKeys('damin@test.com');
        await driver.findElement(By.id('age')).sendKeys('20');
        await driver.findElement(By.id('salary')).sendKeys('100000');
        await driver.findElement(By.id('department')).sendKeys('QA');
        await driver.findElement(By.id('submit')).click();
        driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.findElement(By.id('edit-record-4')).click();


     
    }catch(e){
        console.log(e)
    }finally{
        // await driver.quit();
    }
    
}

addEditRmove()