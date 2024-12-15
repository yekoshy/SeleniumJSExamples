
import {assert} from 'chai';
import forEach from 'mocha-each';
import {CalcPage} from '../CalcPageObjects/calcPage.js';

var calcPage = new CalcPage();

async function test(inp1,inp2,op,expected){
  await calcPage.setInput('number1',inp1);
  await calcPage.setInput('number2',inp2);
  await calcPage.setOp(op);
  await calcPage.calc();
  let result = await calcPage.getOutput();
  assert.equal(result,expected,'Wrong Output!');
}



describe('Testsuit for testing Basic Calc functionality', function () {
       
    before(async function(){
        var baseurl = 'https://testpages.eviltester.com/styled/calculator';
        await calcPage.go_to_url(baseurl);
      
    })

    after(async function(){
      await calcPage.quit();
    })
   


    context('Addition', async function(){
    forEach([
        [3, 4, 7],
        [2, '-2', 0],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Adding %s and %s then returns %s', async function(inp1, inp2, expected){
        await test(inp1,inp2,'plus',expected)
        
    });})

    context('Subtraction', async function(){
    forEach([
        [7, 4, 3],
        [2, '-2', 4],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Subtracting %s and %s then returns %s', async function(inp1, inp2, expected){
        await test(inp1,inp2,'minus',expected)



    });})

    context('Multiplication', async function(){
        forEach([
        [7, 4, 28],
        [2, '-2', '-4'],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Multiplying %s and %s then returns %s', async function(inp1, inp2, expected){

       await test(inp1,inp2,'times',expected)

    });})

    context('Division', async function(){
        forEach([
        [28, 4, 7],
        [2, '-2', '-1'],
        ['z', 48, 'ERR'],
        [546, '&', 'ERR'],
      ]).it('Dividing %s and %s then returns %s', async function(inp1, inp2, expected){
        await test(inp1,inp2,'divide',expected)
    });
    it('Dividing by Zero', async function(){
        await test(8,0,'divide','Cannot divide by zero')

    });
})
});