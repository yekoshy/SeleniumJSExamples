const{By,Builder}=require('selenium-webdriver')


async function test(){
let driver;

try{
     driver = await new Builder().forBrowser('firefox').build()
    await driver.get('https://demoqa.com/radio-button')
   let impressiveOption = await driver.findElement(By.id('impressiveRadio'))
   let flag = await impressiveOption.isSelected()
   console.log(flag)
   flag = await impressiveOption.isEnabled()
   console.log(flag)
   await driver.findElement(By.css('[for="impressiveRadio"]')).click()
   flag = await impressiveOption.isSelected()
   console.log(flag)
   text = await driver.findElement(By.css('p.mt-3')).getText();
    console.log(text)
   //
   let yesOption = await driver.findElement(By.id('yesRadio'));
    flag = await yesOption.isEnabled()
    console.log(`Yes is enabled: ${flag}`)
    flag = await yesOption.isSelected()
    console.log(`Yes is selected: ${flag}`)
    await driver.findElement(By.css('label[for="yesRadio"]')).click()
    console.log('Yes is clicked')
    flag = await yesOption.isSelected()
    console.log(`Yes is selected: ${flag}`)

    text = await driver.findElement(By.css('p.mt-3')).getText();
    console.log(text)
    let noOption = await driver.findElement(By.id('noRadio'));
    flag = await noOption.isEnabled()
    console.log(`No is enabled: ${flag}`)
    //
}catch(e){
    console.log(e);
}finally{
    driver.quit()
}

}

test()