import {BasePage} from '../CalcPageObjects/basePage.js'
import {By, Builder, Key} from 'selenium-webdriver';

class CalcPage extends BasePage{

    
    async setInput(id,input){
        await super.setText(id,Key.CONTROL + "a");
        await super.setText(id,Key.DELETE);
        await super.setText(id,input);
    }

    async setOp(op){
        await super.clickItem("option[value='"+op+"']")    
    }
    async calc(){
        await super.clickItem("#calculate")
    }
    
    async getOutput(){
         return await super.readText("#answer");

    }

    async getTitle(){
        return await super.readText('h1');
    }
}


export {CalcPage}
