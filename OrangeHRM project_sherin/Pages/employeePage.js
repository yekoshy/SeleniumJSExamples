import { BasePage } from "./basePage.js";
class Employee extends BasePage {


    async hamburgerItem() {

        await this.clickItem("i.oxd-topbar-header-hamburger");
    }
    async pimLink() {
        await this.clickItem(".oxd-sidepanel-body > ul > li:nth-child(2) > a");
    }
    async addBtn() {

        await this.clickItem(".oxd-topbar-body > nav > ul > li:nth-child(3) > a")
        // other way for the add button await this.clickItem("i.oxd-button-icon");


    }

    async saveBtn() {

        await this.clickItem('button[type="submit"]')

    }
    async setfirstName(text) {

        await this.setText('input[name="firstName"]', text);
    }


    async setlasttName(text) {

        await this.setText('input[name="lastName"]', text);
    }



    async setUserID(text) {

        await this.setText('div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input', text);
    }



    async getfirstChildListName() {

        let text = await this.getText("div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(3)");
        console.log(text);  // Log the result to see if the text is correctly retrieved
        return text;

    }


    async deletBtn() {

        await this.clickItem("div:nth-child(1) > div > div:nth-child(9) > div > button:nth-child(2) > i")
    }

    async isDisplayedDeletionPopup() {
        return await this.isDisplayed("#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div");
    }

    async deletionBtnPopUp() {
        await this.clickItem(".orangehrm-modal-footer button.oxd-button--label-danger");
    }



    async insertUserID(text) {
        return await this.setText("div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > input", text);

    }
  

    async searchBtn() {
        await this.clickItem('button[type="submit"]');
    }


      }
    
  


export { Employee }