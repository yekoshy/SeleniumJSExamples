const {By, Builder} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/dynamic-properties');

        //Click on New Window message
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        let enabledbutton
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()
