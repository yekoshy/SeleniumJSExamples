import {By, Builder, until} from 'selenium-webdriver';
import { assert } from 'chai';

async function alerts() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/alerts');
        await driver.manage().window().maximize();
        // to Scroldlown to see the elements
        //clicking the first alertBtn
        await driver.findElement(By.id('alertButton')).click();;
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        await driver.sleep(3000);
        await alert.accept();
        // Verfiy the displayed alertText
        assert.equal(alertText,'You clicked a button','a different alertText is displayed');
        //Clicking the second alertBtn
        await driver.findElement(By.id('timerAlertButton')).click();;
        await driver.wait(until.alertIsPresent());
        alert = await driver.switchTo().alert();
        alertText = await alert.getText();
        await driver.sleep(3000);
        await alert.accept();
        //Verfiy the displayed alertText
        assert.equal(alertText,'This alert appeared after 5 seconds','a different alertText is displayed');
        //clicking confrim button
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.findElement(By.id('confirmButton')).click();
        await driver.wait(until.alertIsPresent());
        alert = await driver.switchTo().alert();
        await driver.sleep(3000);
        await alert.accept();
        let resultTxt= await driver.findElement(By.id('confirmResult')).getText();
        //asseting
        assert.equal(resultTxt, 'You selected Ok', 'Different result text is displayed');
        //Clicking Cancel button
        await driver.findElement(By.id('confirmButton')).click();
        await driver.wait(until.alertIsPresent());
        alert = await driver.switchTo().alert();
        await driver.sleep(3000);
        await alert.dismiss();
        resultTxt= await driver.findElement(By.id('confirmResult')).getText();
        assert.equal(resultTxt, 'You selected Cancel', 'Different result text is displayed');
        //Prompt box
        await driver.findElement(By.id('promtButton')).click();
        await driver.wait(until.alertIsPresent());
        alert = await driver.switchTo().alert();
        let alertTxt = "Test123"
        await alert.sendKeys(alertTxt);
        await driver.sleep(3000);
        await alert.accept();
        let prompTxt= await driver.findElement(By.id("promptResult"));
        assert.include(await prompTxt.getText(),alertTxt, 'the two textss are dirffernt');

        // reopne the prompt box and click cancel 
        await driver.findElement(By.id('promtButton')).click();
        await driver.wait(until.alertIsPresent());
        alert = await driver.switchTo().alert()
        await alert.dismiss();
        let parentElement = await driver.findElement(By.xpath('//div[@id="javascriptAlertsWrapper"]/div[4]/div[1]'))
        let childElements = await parentElement.findElements(By.xpath("./child::*"));
        
        assert.equal(childElements.length,1,'We are having more than one child!')
        
        
        
        

    }catch(e){
        console.log(e)


    }finally{
        //await driver.quit();
    }
    
}

alerts()

