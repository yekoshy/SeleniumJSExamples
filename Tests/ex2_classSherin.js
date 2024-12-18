const {By, Builder} = require('selenium-webdriver');

async function firstTest() {

    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/browser-windows/');
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.findElement(By.id('messageWindowButton')).click();
        let windows = await driver.getAllWindowHandles();
        console.log(windows);
        await driver.switchTo().window(windows[1])
        let text = await driver.findElement(By.css('body')).getText();
        console.log(text);
        await driver.close();
        await driver.switchTo().window(windows[0])
        await driver.findElement(By.id('tabButton')).click();
        windows = await driver.getAllWindowHandles();
        console.log(windows);
        await driver.switchTo().window(windows[1])
        text = await driver.findElement(By.css('body')).getText();
        console.log(text); 
        


       
    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

firstTest()