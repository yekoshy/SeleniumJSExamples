import { Login } from '../OrangeHRM project_sherin/loginPage.js'
import {assert} from 'chai';

const login = new Login();

async function testpsitive(username,password){
    let title = await login.getTitle('.orangehrm-login-slot h5');
    assert.equal(title,'Login','Wrong title!');
    await login.setUsername(username);
    await login.setPassword(password);
    await login.submit('button[type="submit"]');
   let currentURl=  await login.getURL();
   console.log (currentURl);

}
describe('Testing Login Page', async function(){
    before(async function (){
        login.go_to_url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    after(async function(){
        login.quit();
    });

    it('Test case 1: Postive Logintest', async function(){
        await testpsitive('Admin','admin123');

    })



})