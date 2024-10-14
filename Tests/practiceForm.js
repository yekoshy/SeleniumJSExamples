const { By, Builder } = require('selenium-webdriver');

// make a function for selcting Gender to avoid repeated lines

async function gender(driver, isMaleFlag, isFemaleFlag) {

    if (isMaleFlag) {
        await driver.findElement(By.css('label[for="gender-radio-1"]')).click();
    } else if (isFemaleFlag) {
        await driver.findElement(By.css('label[for="gender-radio-2"]')).click();
    } else {
        await driver.findElement(By.css('label[for="gender-radio-3"]')).click();

    }
}



async function parcticeForm() {

    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/automation-practice-form');
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);
        await driver.findElement(By.id("firstName")).sendKeys("Test first");
        await driver.findElement(By.id("lastName")).sendKeys("Last");
        await driver.findElement(By.id("userEmail")).sendKeys("test@admin.de");
        await gender(driver, false,false);
        await driver.findElement(By.id("userNumber")).sendKeys("015467904678");
        await driver.findElement(By.id("dateOfBirthInput")).click();
        await driver.findElement(By.css("#dateOfBirth .react-datepicker__month-dropdown-container--select")).click();
        await driver.findElement(By.css("option[value='4']")).click();
        await driver.findElement(By.css("#dateOfBirth .react-datepicker__year-dropdown-container--select")).click();
        await driver.findElement(By.css("option[value='2000']")).click();
        await driver.findElement(By.css("#dateOfBirth .react-datepicker__day.react-datepicker__day--012")).click();

        
        await driver.findElement(By.id("subjectsContainer")).click();
        await driver.findElement(By.css('#subjectsContainer .subjects-auto-complete__control--is-focused')).sendKeys('t');

     

       
   

    } catch (e) {
        console.log(e)
    } finally {
        //await driver.quit();
    }

}

parcticeForm()

