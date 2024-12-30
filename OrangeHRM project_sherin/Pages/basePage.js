import {By, Builder, Key, until} from 'selenium-webdriver';
var driver = new Builder().forBrowser('firefox').build();
driver.manage().setTimeouts({implicit: (10000)});


class BasePage{
    constructor(){
        global.driver = driver;
    }

    async go_to_url(theURL){
        await driver.get(theURL);
        await driver.manage().window().maximize();
    }
    
    async setText(locator,text){
        await driver.findElement(By.css(locator)).sendKeys(text);
    }

    async setTextbyXpath(locator,text){
        let input = await driver.findElement(By.xpath(locator));
        await driver.wait(until.elementLocated(input),3000);
        await input.sendKeys(text);
    }
    
    async getAllElements(locator){
        //let result = await driver.findElement(By.css('div.orangehrm-horizontal-padding >span'));
        //await driver.actions().scroll(0, 0, 0, 0, result).perform()
        //await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await this.clickItem('div.--toggle>button');
        let list = await driver.findElements(By.css(locator));
        console.log(list);
        return list;
    }

    async getText(locator){
        let result =  await driver.findElement(By.css(locator))
        await driver.wait(until.elementIsVisible(result), 3000);
        return result.getText()

        
    }

    async isDisplayed(locator){
        let msg = await driver.findElement(By.css(locator));
        await driver.wait(until.elementIsVisible(msg),5000);
        return await msg.isDisplayed()
    }
    
    async clickItem(locator){
        await driver.findElement(By.css(locator)).click();
    }
    async getURL(){
        return await driver.getCurrentUrl();
    }
    async getAlert() {
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        await alert.accept();
        return alertText;
        

    }

     async quit(){
        await driver.quit();
    }
     async sleep(){
        await driver.sleep(5000);
    }
}

export {BasePage}

