const {By, Builder} = require('selenium-webdriver');

async function titleCheck() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://testpages.eviltester.com/styled/basic-web-page-test.html');
        let title = await driver.getTitle();
        console.log(title);
        let titleLength= title.length;
        console.log(titleLength);
        let pageUrl= await driver.getCurrentUrl();
        console.log(pageUrl);
        let pageSrc= await driver.getPageSource();
        console.log(pageSrc)
        let pageLength=  pageSrc.length;
        console.log(pageLength);

    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

titleCheck()