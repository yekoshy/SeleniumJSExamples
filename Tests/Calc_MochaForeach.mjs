import {By, Builder, Key} from 'selenium-webdriver';
import {assert} from 'Chai';
import forEach from 'mocha-each';

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
        let n1 = await driver.findElement(By.id('number1'));
        await n1.sendKeys(Key.CONTROL + "a");
        await n1.sendKeys(Key.DELETE);
        
        await n1.sendKeys(inp1);
        
        let n2 = await driver.findElement(By.id('number2'));
        await n2.sendKeys(Key.CONTROL + "a");
        await n2.sendKeys(Key.DELETE);
        await n2.sendKeys(inp2);
        
        
        await driver.findElement(By.css('#function > option:nth-child(1)')).click();
        await driver.findElement(By.id('calculate')).click();
        let result = await driver.findElement(By.id('answer')).getText();
        assert.equal(result,expected,'Wrong Output!');



    });
});