const {By, Builder} = require('selenium-webdriver');

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        let url = 'https://testpages.eviltester.com/styled/basic-web-page-test.html'
        await driver.get(url);
        let title = await driver.getTitle();
        console.log(`title is ${title}`);
        console.log(`title length= ${title.length}`);
        let resulturl = await driver.getCurrentUrl();
        console.log(resulturl);
        console.assert(resulturl == url);
        let pageSrc = await driver.getPageSource();
        console.log(pageSrc);
        console.log(pageSrc.length);

    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()