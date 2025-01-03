import { BasePage } from "./basePage.js";
class Login extends BasePage {

    async getTitle(locator) {
        return await this.getText(locator);
    }


    async setUsername(text) {
        await this.setText('input[name="username"]', text);
    }


    async setPassword(text) {
        await this.setText('input[name="password"]', text);
    }

    async submit() {
        await this.clickItem('button[type="submit"]');
    }

    async dropDownList() {

        await this.clickItem(".oxd-userdropdown-name");
        
    }

    async logOutBtn (){
        await this.clickItem("a[href$='logout']");
    }

    
}   


export { Login }