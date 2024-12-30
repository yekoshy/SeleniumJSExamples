import { Employee } from '../Pages/employeePage.js'
import { Login } from '../Pages/loginPage.js'
import { assert } from 'chai';
const login = new Login();
const employee = new Employee()

async function newEmployeeData(firstname, lastname) {
    await employee.setfirstName(firstname);
    await employee.setlasttName(lastname);
    await employee.setUserID ("1234")
    await employee.sleep(1000);
    await employee.saveBtn();
    


}

async function pimPageNavigation() {
    // used sleep so the element can be seen 
    await login.sleep(1000);
    // for this behavior the img and i both cann be clicked
    await employee.pimLink();
    let currentURl = await employee.getURL();
    assert.equal(currentURl, 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList', 'User landed on the wrong page');
    // Click addBtn
    //await employee.sleep(1000);
}

describe('Employee related features', function () {
    // If you need to perform setup before each test, you can use `beforeEach`:
    // beforeEach(async function () {
    //     await login.go_to_url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // });


    it('Test case 3: Add New Employee', async function () {
        await pimPageNavigation();
        await employee.addBtn();
       let currentURl = await login.getURL();
        assert.equal(currentURl, 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee', 'User landed on the wrong page');
        //insert the reuqired data
        //await employee.sleep(1000);
        await newEmployeeData('AA', 'b');
        await pimPageNavigation();
        // to assert that the new User exists
        let firstName = await employee.getfirstChildListName();
        assert.equal(firstName, 'AA','wrong first name' )

    })

    it('Test case 4: Delete Employee', async function () {
        await pimPageNavigation();
        await employee.deletBtn();
        await employee.isDisplayedDeletionPopup();
        await employee.deletionBtnPopUp();
        let firstName = await employee.getfirstChildListName();
        assert.notEqual(firstName, 'AA','Employee was not deleted' )
    })


    it('Test case 5: search by EmployeeID', async function () {
        await pimPageNavigation();
       await employee.insertUserID("123")
       await employee.searchBtn();
       await employee.sleep(1000);
       let firstName = await employee.getfirstChildListName();
        assert.equal(firstName, 'test','wrong employee found' )



    });

});