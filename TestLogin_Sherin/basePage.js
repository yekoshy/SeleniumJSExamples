import {By, Builder, Key, until} from 'selenium-webdriver';
var driver = new Builder().forBrowser('firefox').build();
//driver.manage().setTimeouts({implicit: (10000)});


class BasePage{
    constructor(){
        global.driver = driver;
    }

    async go_to_url(theURL){
        await driver.get(theURL);
    }
    
    async setText(locator,text){
        await driver.findElement(By.id(locator)).sendKeys(text);
    }

    async getText(locator){
        let result =  await driver.findElement(By.css(locator))
        await driver.wait(until.elementIsVisible(result), 2000);
        return result.getText()
    }
    
    async readText(locator){
        let result = await driver.findElement(By.css(locator));
        await driver.wait(until.elementIsVisible(result), 2000);
        return result.getText()

        
    }
    
    async clickItem(locator){
        await driver.findElement(By.css(locator)).click();
    }

     async quit(){
        await driver.quit();
    }
     async sleep(){
        await driver.sleep(5000);
    }
}

export {BasePage}

