const {By, Builder, until} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/alerts');
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
       
        //Click on button to see alert
       
        await driver.findElement(By.id("alertButton")).click();
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        await alert.accept();

        //Click on button to make alert appear after 5 seconds
        await driver.findElement(By.id("timerAlertButton")).click();
        await driver.wait(until.alertIsPresent(), 5050);
        alert = await driver.switchTo().alert();
        alertText = await alert.getText();
        await alert.accept();

        //Click on button to make confirm message appear
        await driver.findElement(By.id("confirmButton")).click();
        alert = await driver.switchTo().alert();
        alertText = await alert.getText();
        await alert.accept();
        const resultElement = await driver.wait(until.elementLocated(By.id("confirmResult")), 5000);
        const resultText = await resultElement.getText();
        console.log("Result text:", resultText);
        if (resultText === "You selected Ok") {
            console.log("Assertion passed: The result text is correct.");
        } else {
            console.error("Assertion failed: The result text is incorrect.");
        }
        //Click on last button to make prompt box appear
        await driver.findElement(By.id("promtButton")).click();
        await driver.wait(until.alertIsPresent(), 1000);
        alert = await driver.switchTo().alert();
        await alert.sendKeys("name");
        await alert.accept();
        const promptResult = await driver.wait(until.elementLocated(By.id("promptResult")), 5000);
        const promptResultText = await promptResult.getText();
        console.log("Prompt result text:", promptResultText);

        if (promptResultText === "You entered name") {
            console.log("Assertion passed: The prompt result text is correct.");
        } else {
            console.error("Assertion failed: The prompt result text is incorrect.");
        }

    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()
