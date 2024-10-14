
const {By, Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function fillForm(driver,editFlag) {
    let data = []
    if(editFlag){
        //Reading the data 
        data[0] = await driver.findElement(By.id('firstName')).getText()+'new';
        data[1] = await driver.findElement(By.id('lastName')).getText()+'new';
        data[2] =await driver.findElement(By.id('userEmail')).getText();
        data[3] =await driver.findElement(By.id('age')).getText();
        data[4] =await driver.findElement(By.id('salary')).getText()+'00';
        data[5] =await driver.findElement(By.id('department')).getText()+'new';
        //
    }else{
        data = ['testtest','testtest','name@example.com',20,1000,'testtest']
    }

        await driver.findElement(By.id('firstName')).sendKeys(data[0]);
        await driver.findElement(By.id('lastName')).sendKeys(data[1]);
        await driver.findElement(By.id('userEmail')).sendKeys(data[2]);
        await driver.findElement(By.id('age')).sendKeys(data[3]);
        await driver.findElement(By.id('salary')).sendKeys(data[4]);
        await driver.findElement(By.id('department')).sendKeys(data[5]);
        await driver.findElement(By.id('submit')).click();
    
}

async function test() {

    let driver;
    try{
        let profile = "C:\\Users\\yasmi\\Desktop\\Firefox profile v2\\kouwcl0c.test";
        const options = new firefox.Options();
        options.setProfile(profile);
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        //driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/webtables');
        
        await driver.findElement(By.id('addNewRecordButton')).click();
        await fillForm(driver,false)

        //Editing existing element
        
        await driver.findElement(By.id('edit-record-3')).click();
        await fillForm(driver,true)

        
        await driver.findElement(By.id('delete-record-1')).click();
        await driver.findElement(By.id('delete-record-2')).click();
        await driver.findElement(By.id('delete-record-3')).click();
        await driver.findElement(By.id('delete-record-4')).click();
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()