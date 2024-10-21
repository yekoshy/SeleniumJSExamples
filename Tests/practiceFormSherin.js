import path from 'path';
import { By, Builder, Key } from 'selenium-webdriver';

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
        // to Scroldlown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);
        //insert first name
        await driver.findElement(By.id("firstName")).sendKeys("Test first");
        //insert first name
        await driver.findElement(By.id("lastName")).sendKeys("Last");
        //insert Email address
        await driver.findElement(By.id("userEmail")).sendKeys("test@admin.de");
        // here to call back a function for Gender
        await gender(driver, false, false);
        // to insert the phone number
        await driver.findElement(By.id("userNumber")).sendKeys("015467904678");
        // to select the date of birth
        await driver.findElement(By.id("dateOfBirthInput")).click();
        await driver.findElement(By.css("#dateOfBirth .react-datepicker__month-dropdown-container--select")).click();
        await driver.findElement(By.css("option[value='4']")).click();
        await driver.findElement(By.css("#dateOfBirth .react-datepicker__year-dropdown-container--select")).click();
        await driver.findElement(By.css("option[value='2000']")).click();
        await driver.findElement(By.css("#dateOfBirth .react-datepicker__day.react-datepicker__day--012")).click();
        // to insert and select the subjcts here the applicatio gets submitted directly coudln't roote ths issue 
       /* let input = await driver.findElement(By.xpath("//input[@id='subjectsInput']"));
        await input.sendKeys('H');
        await input.sendKeys(Key.ARROW_DOWN);
        await input.sendKeys(Key.ENTER);*/
        // to selected the hobbies
        await driver.findElement(By.css("label[for='hobbies-checkbox-2']")).click();
        await driver.findElement(By.css("label[for='hobbies-checkbox-3']")).click();
        // upload picuter
        let img = path.resolve("C:\\Users\\5794\\Desktop\\SeleniumJSExamples\\Tests\\img.jpg ")
        await driver.findElement(By.id("uploadPicture")).sendKeys(img);
        //insert current address
        await driver.findElement(By.id("currentAddress")).sendKeys("to writ any thing");
        // Select State and City
        let state = await driver.findElement(By.id("react-select-3-input"));
        await state.sendKeys("h");
        await state.sendKeys(Key.ARROW_DOWN);
        await state.sendKeys(Key.ENTER);

        let city = await driver.findElement(By.id("react-select-4-input"));
        await city.sendKeys("k");
        await city.sendKeys(Key.ENTER); 
        //submit the forum
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/2);");
        await driver.sleep(3000);
        await driver.findElement(By.css("button#submit")).click();


 















    } catch (e) {
        console.log(e)
    } finally {
        //await driver.quit();
    }

}

parcticeForm()

