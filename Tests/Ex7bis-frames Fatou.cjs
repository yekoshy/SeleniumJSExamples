const {By, Builder} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/nestedframes');
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
       
        //Switch to the parent frame and get its content
        const parentFrame = driver.findElement(By.css("iframe#frame1"));
        await driver.switchTo().frame(parentFrame);
        const parentText = await driver.findElement(By.tagName("body")).getText();
        console.log("Text in parent Frame", parentText);
        
        //switch to the child frame and get the content
        const childFrame = await driver.findElement(By.tagName("iframe"));
        await driver.switchTo().frame(childFrame);
        const childText = await driver.findElement(By.tagName("p")).getText();
        console.log("Text in child frame:", childText);
        
        //Switch back to the main content
        await driver.switchTo().defaultContent();
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()