import { By, Builder, Key } from 'selenium-webdriver';
import assert from 'assert'
import { Select } from 'selenium-webdriver';


async function selectMenu() {

    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://demoqa.com/select-menu');
        await driver.manage().window().maximize();
        // to Scroldown to see the elements
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");
        await driver.sleep(3000);
        let inputOne = await driver.findElement(By.xpath("//input[@id='react-select-2-input']"));
        await inputOne.sendKeys("t");
        await inputOne.sendKeys(Key.ARROW_DOWN);
        await inputOne.sendKeys(Key.ENTER);
        let inputTwo = await driver.findElement(By.xpath("//input[@id='react-select-3-input']"));
        await inputTwo.sendKeys("d");
        //await inputTwo.sendKeys(Key.ARROW_DOWN);
        await inputTwo.sendKeys(Key.ENTER);
        // to Print all the option 
        const selectElement = await driver.findElement(By.id("oldSelectMenu"));
        const select = new Select(selectElement);
        let optionElments = await select.getOptions();
        for (let index in optionElments) {
            let txt = await optionElments[index].getText();
            console.log(txt);
        }
        // Find the needed Elments 
        let purple = await driver.findElement(By.css("option[value='4']"));
        let magenta = await driver.findElement(By.css("option[value='9']"));
        let aqua = await driver.findElement(By.css("option[value='10']"));
        //Select 'Purple' using the index.
        await select.selectByIndex(4);
        assert.strictEqual(true, await purple.isSelected());

        //const magentaElement = await driver.findElement(By.css('option[value="Magenta"]'))
        await select.selectByVisibleText('Magenta');
        assert.strictEqual(true, await magenta.isSelected());

        //Select an option using value.

        await select.selectByValue('10');
        assert.strictEqual(true, await aqua.isSelected());
        
     
    }catch(e){
        console.log(e)
    }finally{
        //await driver.quit();
    }
    
}

selectMenu()