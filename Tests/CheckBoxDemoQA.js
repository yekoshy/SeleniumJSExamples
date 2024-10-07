const {By, Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
async function test() {

    let driver;
    try{
        const options = new firefox.Options();
        //let profile = "C:\\Users\\yasmi\\Desktop\\408hiksd.testtest";
        //options.setProfile(profile);
        //let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/checkbox');
        await driver.manage().window().maximize();
        
        let homeCheck = await driver.findElement(By.css('#tree-node-home'))
        let flag = await homeCheck.isSelected()
        console.log(flag);
        
       await driver.findElement(By.css('.rct-icon.rct-icon-uncheck')).click()
       let text = await driver.findElement(By.css('div#result.display-result.mt-4')).getText()
       console.log(text);
       await driver.findElement(By.css('.rct-icon.rct-icon-expand-close')).click() 
       flag = await homeCheck.isSelected()
       console.log(flag);

       .rct-icon.rct-icon-uncheck
        
    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

test()