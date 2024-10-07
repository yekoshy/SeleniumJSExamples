const { By, Builder } = require('selenium-webdriver');
//const assert = require('assert');

async function checkBox() {

    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        // to open the window 
        await driver.get('https://demoqa.com/checkbox');
        // to maximize the windo to avoid the add to overwrite the elements
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);
        // get the home checkbox element and click it
        await driver.findElement(By.css('label[for="tree-node-home"]')).click();
        // get the content text and print it 
        let txt = await driver.findElement(By.id("result")).getText();
        console.log(txt);
        // get the arrow element and expand all the list
        await driver.findElement(By.css("span > button")).click();
        // get the desktop checkbox element and click it
        await driver.findElement(By.css('label[for="tree-node-desktop"]')).click();
        // get the content text and print it 
        txt = await driver.findElement(By.id("result")).getText();
        console.log(txt);
        // get the documents checkbox element and click it
        await driver.findElement(By.css('label[for="tree-node-documents"]')).click();
        // get the content text and print it 
        txt = await driver.findElement(By.id("result")).getText();
        console.log(txt);
        // get the downloads  checkbox element and click it
        await driver.findElement(By.css('label[for="tree-node-downloads"]')).click();
        // to Assert that the home checkbox is not selected
        let checked = await driver.findElement(By.css('label[for="tree-node-home"]')).isSelected();
        //assert.strictEqual(checked, false);
        console.log(`Is Home check box is Selected :"  ${checked}`);


    } catch (e) {
        console.log(e)

    }  finally{
       await driver.quit();
   } 
    
    }
    checkBox()
