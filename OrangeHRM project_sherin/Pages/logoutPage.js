import { BasePage } from "./basePage.js";
class Logout extends BasePage {

   
    async dropDownList() {

        await this.clickItem(".oxd-userdropdown-name");
        
    }

    async logOutBtn (){
        await this.clickItem("a[href$='logout']");
    }

    
}   


export { Logout }