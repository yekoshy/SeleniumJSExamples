import{By, Builder} from 'selenium-webdriver';

async function frames() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/frames');
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        //navigating to first iframe
        let iframe = driver.findElement(By.id('frame1'));
        await driver.switchTo().frame(iframe);
        let iframeTitle= await driver.findElement(By.id('sampleHeading')).getText();
         console.log(`first iframe title is:${iframeTitle}`);
        // Return to the top level
         await driver.switchTo().defaultContent();
         //navigating to second iframe
         let iframeSecond = driver.findElement(By.id('frame2'));
         await driver.switchTo().frame(iframeSecond);
         iframeTitle= await driver.findElement(By.id('sampleHeading')).getText();
         console.log(`second iframe title is:${iframeTitle}`);
         // Return to the top level
         await driver.switchTo().defaultContent();
   

    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

frames()