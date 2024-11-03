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


describe('Testsuit for testing Basic Calc functionality', function () {
    let driver;
    
    before(async function(){
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://testpages.eviltester.com/styled/calculator');
      
    })
    
    after(async function(){
        await driver.quit();
    })

    context('Addition', async function(){
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



    });})

    context('Subtraction', async function(){
    forEach([
        [7, 4, 3],
        [2, '-2', 4],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Subtracting %s and %s then returns %s', async function(inp1, inp2, expected){

        await setInput(driver,'number1',inp1)
        await setInput(driver,'number2',inp2)
        let result = await getOutput(driver,'minus');  
        assert.equal(result,expected,'Wrong Output!');



    });})

    context('Multiplication', async function(){
        forEach([
        [7, 4, 28],
        [2, '-2', '-4'],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Multiplying %s and %s then returns %s', async function(inp1, inp2, expected){

        await setInput(driver,'number1',inp1)
        await setInput(driver,'number2',inp2)
        let result = await getOutput(driver,'times');  
        assert.equal(result,expected,'Wrong Output!');



    });})

    context('Division', async function(){
        forEach([
        [28, 4, 7],
        [2, '-2', '-1'],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Dividing %s and %s then returns %s', async function(inp1, inp2, expected){

        await setInput(driver,'number1',inp1)
        await setInput(driver,'number2',inp2)
        let result = await getOutput(driver,'divide');  
        assert.equal(result,expected,'Wrong Output!');



    });
    it.skip('Dividing by Zero', async function(){

        await setInput(driver,'number1',8)
        await setInput(driver,'number2',0)
        let result = await getOutput(driver,'divide');  
        assert.equal(result,'Cannot divide by zero','Wrong Output!');



    });
})
});