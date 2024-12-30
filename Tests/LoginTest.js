import { Login } from '../TestLogin/loginPage.js'
import {assert} from 'chai';

const login = new Login();

<<<<<<< HEAD


=======
>>>>>>> 92e1a29fa34e5b64f48256580d05c9585b9cbe92
async function testNegative(username,password,errMsg){
    let title = await login.getTitle('#login > h2');
    assert.equal(title,'Test login','Wrong title!');
    await login.setUsername(username);
    await login.setPassword(password);
<<<<<<< HEAD
    await login.clickItem('#submit')
=======
    await login.clickItem('#submit');
}

async function testNegative(username,password,errMsg){
   await  writeLogins(username,password);
>>>>>>> 23070656e85da1fe828d12e08ba132f2db02f157
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
<<<<<<< HEAD
<<<<<<< HEAD
    

=======
        await testPositive('student','Password123', 'Congratulations student. You successfully logged in!')
>>>>>>> 92e1a29fa34e5b64f48256580d05c9585b9cbe92
=======
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
>>>>>>> 23070656e85da1fe828d12e08ba132f2db02f157
        
>>>>>>> 23070656e85da1fe828d12e08ba132f2db02f157
    })



})