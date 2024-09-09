const {By, Builder} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
       driver = await new Builder().forBrowser('firefox').build();
       let url = 'https://demoqa.com/browser-windows/'
       await driver.get(url);

       await driver.findElement(By.id('messageWindowButton')).click()
       let handles = await driver.getAllWindowHandles();
       console.log(handles);
       await driver.switchTo().window(handles[1]);
       await driver.manage().window().maximize();
       let htab = await driver.findElement(By.css('body')).getText();
       console.log(htab);

       await driver.switchTo().window(handles[0]);
       await driver.manage().window().maximize();
       await driver.findElement(By.id('tabButton')).click();

       handles = await driver.getAllWindowHandles();
       console.log(handles);
       await driver.switchTo().window(handles[1]);
       await driver.manage().window().maximize();
       htab = await driver.findElement(By.id('sampleHeading')).getText();
       console.log(htab);

       await driver.switchTo().window(handles[0]);
       await driver.manage().window().maximize();
       await driver.findElement(By.id('windowButton')).click()
       
       handles = await driver.getAllWindowHandles();
       console.log(handles);
       await driver.switchTo().window(handles[3]);
       await driver.manage().window().maximize();
       htab = await driver.findElement(By.id('sampleHeading')).getText();
       console.log(htab);
    }catch(e){
        console.log(e)
    }finally{
       await driver.quit();
    }
    
}

test()