const {By, Builder} = require('selenium-webdriver');

async function firstTest(params) {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://testpages.eviltester.com/styled/basic-web-page-test.html');

    let title = await driver.getTitle();
    console.log(title);
   let titleLength = title.length;
   console.log(titleLength);
   let pageUrl = await driver.getCurrentUrl();
   console.log(pageUrl);
   if (pageUrl === 'https://testpages.eviltester.com/styled/basic-web-page-test.html') {
    console.log("Correct page opened.");
} else {
    console.log("Incorrect page opened.");
}
let pageSource = await driver.getPageSource();
        let pageSourceLength = pageSource.length;
        console.log("pageSourceLength");
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}
firstTest();