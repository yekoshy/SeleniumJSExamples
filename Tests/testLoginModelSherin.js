import { Login } from '../TestLogin_Sherin/LoginPage.js'
import { assert } from 'chai';



const login = new Login();

async function inputLogins(username, password) {
    await login.setUsername(username);
    await login.setPassword(password);
    await login.clickItem('#submit');

}

async function testNegative(username, password, errMsg) {
    let title = await login.getTitle('#login > h2');
    assert.equal(title, 'Test login', 'Wrong title!');
    await inputLogins(username, password);
    let errFlag = await login.isDisplayedErr();
    assert.equal(errFlag, true, "Error msg isn't displayed!")
    let error = await login.getErrorMsg();
    assert.equal(error, errMsg, 'Wrong Error Msg!');
}

describe('Testing Login Page', async function () {
    before(async function () {
        login.go_to_url('https://practicetestautomation.com/practice-test-login/');
    })
    after(async function () {
        login.quit();
    })

    it('Test case 1: Negative username test', async function () {
        await inputLogins('incorrectUser', 'Password123');
        await testNegative('Your username is invalid!');

    })
    it('Test case 2: Negative password test', async function () {
        await inputLogins('student', 'incorrectPassword');
        await testNegative('Your password is invalid!')
    })
    it('Test case 3: Positive test', async function () {
        await inputLogins('student', 'password123');
        //Verify new page contains expected text ('Congratulations' or 'successfully logged in')
        let pageTxt = await driver.findElement(By.css("p.has-text-align-center > strong")).getText();
        assert.include(pageTxt, 'Congratulations' || 'successfully logged in', 'Page text doe not includ any of the give texts');

        //Verify button Log out is displayed on the new page
        let logoutBtn = await driver.findElement(By.css("div.post-content > div > div > div > a"));
        await driver.wait(until.elementIsVisible(logoutBtn), 3000);
        let btnIsdisplayed = await logoutBtn.isDisplayed();
        assert.equal(btnIsdisplayed, true)



    })



})