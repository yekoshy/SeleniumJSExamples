import {DashboardPage} from '../pages/DashboardPage.js';
import { assert } from 'chai';

// Test
describe('Ogout testing ', async function(){
  let dashBoard = new DashboardPage();



  after(async function () {
    await dashBoard.quit();
  });

  it('Logout Functionality', async function () {
    let flag = await dashBoard.verifyDashboardPageLoaded();
    assert.isTrue(flag,'Dashboard not found');
    await dashBoard.logout();
    let url = await dashBoard.getURL();
    assert.include(url,'login',"We aren't back to the login page ")
    
  });
  
})

