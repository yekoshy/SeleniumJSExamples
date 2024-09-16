const{By,Builder}=require('selenium-webdriver')


async function test(){
let driver;

try{
     driver = await new Builder().forBrowser('firefox').build()
    await driver.get('https://demoqa.com/radio-button')
    let text = await driver.findElement(By.css('h1.text-center')).getText()
    console.log(text)
}catch(e){
    console.log(e);
}finally{
    driver.quit()
}

}

test()