import { By, Builder,until } from 'selenium-webdriver';
import { assert } from 'chai';
async function dynamicProperties() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get(' https://demoqa.com/dynamic-properties');
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(5000);
        // first button is enabled
        let enableBtn= driver.findElement(By.id("enableAfter"));
        assert.strictEqual(true, await enableBtn.isDisplayed() && await enableBtn.isEnabled());
         //second button color change
        let colorBtn= driver.findElement(By.id("colorChange"));
         let classes= await colorBtn.getAttribute('class');
         console.log(classes);
         assert.include(classes,'text-danger')
         //third button 
         let visibleBtn= driver.findElement(By.id("visibleAfter"));
         assert.strictEqual(true, await visibleBtn.isDisplayed(), 'Button is not visible');

       

       
        
    }catch(e){
        console.log(e)
    }finally{
        // await driver.quit();
    }
    
}

dynamicProperties()