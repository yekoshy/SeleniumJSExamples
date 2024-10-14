const {By, Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
async function PracticeForm() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        let url = 'https://demoqa.com/automation-practice-form'
        await driver.get(url);
        
        // Fill out the fields
        await driver.findElement(By.id("firstName")).sendKeys("Sophie");
        await driver.findElement(By.id("lastName")).sendKeys("Juillet");
        await driver.findElement(By.id("userEmail")).sendKeys("test@gmail.com");

        // Select gender radio button
        await driver.findElement(By.id("gender-radio-2")).click();

        await driver.findElement(By.id("userNumber")).sendKeys("0706151825");
        
        //Open dropdown and select Date of birth
        await driver.findElement(By.id("dateOfBirthInput")).click();
        await driver.findElement(By.className("react-datepicker__month-select")).click(); // Open month dropdown
        await driver.findElement(By.cssSelector("option[value='0']")).click(); // Select January
        await driver.findElement(By.className("react-datepicker__year-select")).click();// Open year dropdown
        await driver.findElement(By.cssSelector("option[value='2001']")).click();// Select a year
        await driver.findElement(By.cssSelector(".react-datepicker__day--001")).click();// Select day
        
        await driver.findElement(By.id("subjectsContainer")).sendKeys('E');
        await driver.findElement(By.id("hobbies-checkbox-2")).click();

        await driver.findElement(By.id("currentAddress")).sendKeys("Somewhere in India");
        await driver.findElement(By.cssSelector('#state .css-1hwfws3')).click();
        await driver.findElement(By.cssSelector("div[id^='react-select-3-option-0']")).click();//Open dropdown and select state
        await driver.findElement(By.cssSelector('#city .css-1hwfws3')).click();//Open dropdown an select a city
        await driver.findElement(By.cssSelector("div[id^='react-select-4-option-0']")).click();
        await driver.findElement(By.id('submit')).click();//Click on submit button
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

PracticeForm()