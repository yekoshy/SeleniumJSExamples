import { Logout } from '../Pages/logoutPage.js'
import { assert } from 'chai';

const logout = new Logout();

describe('Logout test', async function () {
    after(async function () {
        await logout.quit();

        // /await login.sleep(2000);
       

    });


    it('Test case 2: Log out functionality', async function () {
        //await testpositive('Admin', 'admin123');
        await logout.dropDownList();
        await logout.logOutBtn();
        let currentURl = await logout.getURL();
        assert.equal(currentURl, 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 'User landed on the wrong page');


    })



})

