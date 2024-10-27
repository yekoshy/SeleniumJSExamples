const {By, Builder} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/frames');
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
       
        //Switch to the first frame and get its content
        const iframe1 = driver.findElement(By.id("frame1"));
        await driver.switchTo().frame(iframe1);
        const textInFrame1 = await driver.findElement(By.id("sampleHeading")).getText();
        console.log("Text in frame 1", textInFrame1);
        
        //switch back to the main content before accessing the second frame
        await driver.switchTo().defaultContent();

        //Switch to the second frame and get its content
        const iframe2 = driver.findElement(By.id("frame2"));
        await driver.switchTo().frame(iframe2);
        const textInFrame2 = await driver.findElement(By.id("sampleHeading")).getText();
        console.log("Text in frame 2", textInFrame2);
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()