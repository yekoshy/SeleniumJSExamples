import { BasePage } from "./basePage.js";


class Login extends BasePage {
    async getTitle(locator){
        return await this.getText(locator);
    }

    async setUsername(text){
        await this.setText('#username',text);
    }

    async setPassword(text){
        await this.setText('#password',text);
    }

    async submit(){
        await this.clickItem('#submit');
    }
    async getErrorMsg(){
        return await this.getText('#error');
    }

    async isDisplayedErr(){
        return await this.isDisplayed('#error');
    }

}

export {Login}