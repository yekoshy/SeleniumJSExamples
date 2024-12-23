import {BasePage} from '../utility/basepage.js';


class DashboardPage extends BasePage{


  async verifyDashboardPageLoaded() {
      
      return await this.isDisplayed('.oxd-userdropdown-name');
  }

  async logout() {
      
      await this.clickItem('.oxd-userdropdown-name');
      let flag = await this.isDisplayed("a[href$='logout']");
      if(flag){
        await this.clickItem("a[href$='logout']");  
      }
      
      
  }
}

export {DashboardPage};