const {By, Builder} = require('selenium-webdriver');

async function firstTest() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.google.com/');
        
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

firstTest()