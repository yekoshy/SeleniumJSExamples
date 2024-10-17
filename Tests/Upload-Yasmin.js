//in the terminal
//npm install --save path 
const path = require("path");
const {By, Builder} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/upload-download');
        let file = path.resolve("C:\\Users\\yasmi\\Desktop\\SeleniumWebdriverJS\\SeleniumJSExamples\\Tests\\test.js")
        
        await driver.findElement(By.id('uploadFile')).sendKeys(file)
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
}
    
    test()
