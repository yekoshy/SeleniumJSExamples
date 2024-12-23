import { Login } from '../TestLogin/loginPage.js'
import {assert} from 'chai';

const login = new Login();

async function testNegative(username,password,errMsg){
    let title = await login.getTitle('#login > h2');
    assert.equal(title,'Test login','Wrong title!');
    await login.setUsername(username);
    await login.setPassword(password);
    await login.clickItem('#submit')
    let errFlag = await login.isDisplayedErr();
    assert.equal(errFlag,true,"Error msg isn't displayed!")
    let error = await login.getErrorMsg();
    assert.equal(error,errMsg,'Wrong Error Msg!');
}

describe('Testing Login Page', async function(){
    before(async function (){
        login.go_to_url('https://practicetestautomation.com/practice-test-login/');
    })
    after(async function(){
        login.quit();
    })

    it('Test case 1: Negative username test', async function(){
        await testNegative('incorrectUser','Password123','Your username is invalid!')

    })
    it('Test case 2: Negative password test', async function(){
        await testNegative('student','incorrectPassword','Your password is invalid!') 
    })
    it('Test case 3: Positive test', async function(){
        await testPositive('student','Password123', 'Congratulations student. You successfully logged in!')
    })



})