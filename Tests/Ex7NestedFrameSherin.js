import{By, Builder} from 'selenium-webdriver';

async function nestedFrames() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/nestedframes');
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.manage().window().maximize();
        //navigating to parent iframe
        let iframe = driver.findElement(By.id('frame1'));
        await driver.switchTo().frame(iframe);
        let iframeTitle= await driver.findElement(By.xpath("/html/body")).getText();
        console.log(`first iframe title is:${iframeTitle}`);
        //navigating to child iframe
        let iframeSecond = driver.findElement(By.css('body > iframe'));
        await driver.switchTo().frame(iframeSecond);
        iframeTitle= await driver.findElement(By.xpath("/html/body/p")).getText();
        console.log(`second iframe title is:${iframeTitle}`);
        // Return to the top level
        await driver.switchTo().defaultContent();

    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

nestedFrames()