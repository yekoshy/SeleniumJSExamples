const {By, Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
async function test() {

    let driver;
    try{
        let options = new firefox.Options().addExtensions();
        let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        await driver.get('https://demoqa.com/checkbox');
        await driver.manage().window().maximize();
        let homeCheck = await driver.findElement(By.css('#tree-node-home'))
        let flag = await homeCheck.isSelected()
        console.log(flag);
        
       await homeCheck.click()
        
       // flag = await homeCheck.isSelected()
       // console.log(flag);
        
    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

test()