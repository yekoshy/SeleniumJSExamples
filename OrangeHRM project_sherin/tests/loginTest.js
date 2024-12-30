import { Login } from '../Pages/loginPage.js'
import { assert } from 'chai';

const login = new Login();


async function testpositive(username, password) {

    let title = await login.getTitle(".orangehrm-login-slot > h5");
    assert.equal(title, 'Login', 'Wrong title!');
    await login.setUsername(username);
    await login.setPassword(password);
    await login.submit('button[type="submit"]');
    let currentURl = await login.getURL();
    assert.equal(currentURl, 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', 'User landed on the wrong page');

}



describe('Login test', async function () {
    before(async function () {
        await login.go_to_url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // /await login.sleep(2000);
       

    });

    it('Test case 1: Postive Logintest', async function () {
        await testpositive('Admin', 'admin123');

    })


});

