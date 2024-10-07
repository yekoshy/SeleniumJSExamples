const{By,Builder}=require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox');

async function test(){
let driver;

try{
    //Working with profile added extension
    /*
    let profile = "C:\\Users\\yasmi\\Desktop\\Firefox profile v2\\kouwcl0c.test";
    const options = new firefox.Options();
    options.setProfile(profile);
    driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    */
    driver = await new Builder().forBrowser('firefox').build()
    await driver.get('https://demoqa.com/radio-button')
    await driver.manage().window().maximize();
    let text = await driver.findElement(By.css('h1.text-center')).getText()
    console.log(text)

    //Yes option
    let yesOption = await driver.findElement(By.id('yesRadio'));
    let flag = await yesOption.isEnabled()
    console.log(`Yes is enabled: ${flag}`)
    flag = await yesOption.isSelected()
    console.log(`Yes is selected: ${flag}`)
    await driver.findElement(By.css('label[for="yesRadio"]')).click()
    console.log('Yes is clicked')
    flag = await yesOption.isSelected()
    console.log(`Yes is selected: ${flag}`)

    text = await driver.findElement(By.css('p.mt-3')).getText();
    console.log(text)
    



}catch(e){
    console.log(e);
}finally{
    driver.quit()
}

}

test()