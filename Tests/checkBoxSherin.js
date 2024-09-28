const { By, Builder } = require('selenium-webdriver');
const assert = require('assert');

async function checkBox(params) {

    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/checkbox')
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);
        await driver.findElement(By.css('label[for="tree-node-home"]')).click();
        let txt = await driver.findElement(By.id("result"))
        txt.getText();
        await driver.findElement(By.css("span > button")).click();
        await driver.findElement(By.css('label[for="tree-node-desktop"]')).click();
        txt.getText();
        await driver.findElement(By.css('label[for="tree-node-documents"]')).click();
        txt.getText();
        await driver.findElement(By.css('label[for="tree-node-downloads"]')).click();
        let checked = await driver.findElement(By.css('label[for="tree-node-home"]')).isSelected();
        assert.strictEqual(checked, false);
        console.log(`Is Home check box is Selected :"  ${checked}`);
        

    } catch (e) {
        console.log(e)

    }  //finally{
       // await driver.quit();
   //} 
    
    }
    checkBox()
