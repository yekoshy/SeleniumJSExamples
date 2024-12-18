import { Login } from '../TestLogin/loginPage.js'
import {assert} from 'chai';

const login = new Login();

async function writeLogins(username,password){
    let title = await login.getTitle('#login > h2');
    assert.equal(title,'Test login','Wrong title!');
    await login.setUsername(username);
    await login.setPassword(password);
    await login.clickItem('#submit');
}

async function testNegative(username,password,errMsg){
   await  writeLogins(username,password);
    let errFlag = await login.isDisplayedErr();
    assert.equal(errFlag,true,"Error msg isn't displayed!")
    let error = await login.getErrorMsg();
    assert.equal(error,errMsg,'Wrong Error Msg!');
}

describe('Testing Login Page', async function(){
    before(async function (){
        await login.go_to_url('https://practicetestautomation.com/practice-test-login/');
    })
    after(async function(){
        await login.quit();
    })

    it('Test case 1: Negative username test', async function(){
        await testNegative('incorrectUser','Password123','Your username is invalid!')

    })
    it('Test case 2: Negative password test', async function(){
        await testNegative('student','incorrectPassword','Your password is invalid!') 
    })
    it('Test case 3: Positive test', async function(){
        await writeLogins('student','Password123');

        let url = await login.getURL();
        assert.include(url,'logged-in-successfully','Wrong Page!')
        
        let title = await login.getTitle('div.post-header > h1');
        assert.equal(title,'Logged In Successfully','Wrong Title!');
        
        let btnFlag = await login.isDisplayed('a.wp-block-button__link');
        assert.equal(btnFlag,true,'Log out button not there !');
        
        await login.clickItem('a.wp-block-button__link');
        
        url = await login.getURL();
        assert.include(url,'practice-test-login','Wrong Page!')
        
        title = await login.getTitle('#login > h2');
        assert.equal(title,'Test login','Wrong title!');
        
    })



})