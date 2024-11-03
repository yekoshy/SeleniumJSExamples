import {By, Builder, Key} from 'selenium-webdriver';
import {assert} from 'Chai';
import forEach from 'mocha-each';

async function setInput(driver,id,input){
    let n = await driver.findElement(By.id(id));
    await n.sendKeys(Key.CONTROL + "a");
    await n.sendKeys(Key.DELETE);
    await n.sendKeys(input);
}

async function getOutput(driver,op){
    await driver.findElement(By.css("option[value='"+op+"']")).click();
    await driver.findElement(By.id('calculate')).click();
    let result = await driver.findElement(By.id('answer')).getText();
    return result;

}


describe('Testsuit for testing Plus functionality', function () {
    let driver;
    
    before(async function(){
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://testpages.eviltester.com/styled/calculator');
      
    })
    
    after(async function(){
        await driver.quit();
    })

    forEach([
        [3, 4, 7],
        [2, '-2', 0],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Adding %s and %s then returns %s', async function(inp1, inp2, expected){

        await setInput(driver,'number1',inp1)
        await setInput(driver,'number2',inp2)
        let result = await getOutput(driver,'plus');  
        assert.equal(result,expected,'Wrong Output!');



    });
});