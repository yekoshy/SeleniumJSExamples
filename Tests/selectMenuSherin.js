const {By, Builder} = require('selenium-webdriver');

async function selectMenu() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/select-menu');
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);
        let input = await driver.findElement(By.xpath("//input[@id='react-select-2-input']"));
        await input.sendKeys("t");
        await input.sendKeys(Key.ARROW_DOWN);
        await input.sendKeys(Key.ENTER);



      
    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

selectMenu()