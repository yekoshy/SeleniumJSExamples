import {By, Builder} from 'selenium-webdriver';
import { assert } from 'chai';  // Using Assert style

async function test() {

    let driver;
    try{
        driver = await new Builder().forBrowser('firefox').build();
        
        await driver.get('https://demoqa.com/dynamic-properties');
       
        let colorBtn = await driver.findElement(By.id('colorChange'));
        
        let classes = await colorBtn.getAttribute('class');
        assert.notInclude(classes,'text-danger', "Text color isn't white");
        await driver.sleep(5000);
        
        classes = await colorBtn.getAttribute('class');
        assert.include(classes,'text-danger', "Text color isn't red");
        
    }catch(e){
        console.log(e)
    }finally{
        await driver.quit();
    }
    
}

test()