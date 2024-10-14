
const {By, Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function test() {

    let driver;
    try{
        let profile = "C:\\Users\\yasmi\\Desktop\\Firefox profile v2\\kouwcl0c.test";
        const options = new firefox.Options();
        options.setProfile(profile);
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        //driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/browser-windows/');
        await driver.findElement(By.id('messageWindowButton')).click();
        let windows = await driver.getAllWindowHandles();
        console.log(windows);
        await driver.switchTo().window(windows[1]);
        let text = await driver.findElement(By.css('body')).getText();
        console.log(text);

    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

test()