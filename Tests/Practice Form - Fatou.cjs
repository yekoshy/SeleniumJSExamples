const {By, Builder, Key} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const path = require('path');
async function PracticeForm() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/automation-practice-form');
        await driver.manage().window().maximize();
        
        //Scroll down to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);

        // Fill out the fields
        await driver.findElement(By.id("firstName")).sendKeys("Sophie");
        await driver.findElement(By.id("lastName")).sendKeys("Juillet");
        await driver.findElement(By.id("userEmail")).sendKeys("test@gmail.com");

        // Select gender radio button
        await driver.findElement(By.css("label[for='gender-radio-2']")).click();

        await driver.findElement(By.id("userNumber")).sendKeys("0706151825");
        
        //Open dropdown and select Date of birth
        await driver.findElement(By.id("dateOfBirthInput")).click();
        await driver.findElement(By.className("react-datepicker__month-select")).click(); // Open month dropdown
        await driver.findElement(By.css("option[value='0']")).click(); // Select January
        await driver.findElement(By.className("react-datepicker__year-select")).click();// Open year dropdown
        await driver.findElement(By.css("option[value='2001']")).click();// Select a year
        await driver.findElement(By.css(".react-datepicker__day--001")).click();// Select day
        
        //subject input
        let input = await driver.findElement(By.xpath("//input[@id='subjectsInput']"))
        await input.sendKeys('a');
        await input.sendKeys(Key.ARROW_DOWN);
        await input.sendKeys(Key.ENTER);

        //upload file
        let file = path.resolve("C:\\Users\\fatou\\Desktop\\Test Selenium\\Pourletest.png")
        await driver.findElement(By.id('uploadPicture')).sendKeys(file)
       
        //Select state and city
        await driver.findElement(By.id("currentAddress")).sendKeys("Somewhere in India");
        await driver.findElement(By.css('#state .css-1hwfws3')).click();
        await driver.findElement(By.css("div[id^='react-select-3-option-0']")).click();
        await driver.findElement(By.css('#city .css-1hwfws3')).click();
        await driver.findElement(By.css("div[id^='react-select-4-option-0']")).click();
        await driver.findElement(By.id('submit')).click();//Click on submit button
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

PracticeForm()+