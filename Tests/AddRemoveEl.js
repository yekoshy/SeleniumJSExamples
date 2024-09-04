const {By, Builder, Browser} = require('selenium-webdriver');
//const Chrome = require('selenium-webdriver/chrome');
 
 async function AddRemoveEle() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('firefox').build();
	//driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://the-internet.herokuapp.com/add_remove_elements/');
	//Reading the header title 
	let txt = await driver.findElement(By.css('h3')).getText();
	console.log(`Header title  = ${txt}`)
	//Clicking on the button
	for(let i=0;i<10;i++){
		await driver.findElement(By.xpath('//button[text()="Add Element"]')).click()
	}
	
	let btns =await driver.findElements(By.xpath('//button[text()="Delete"]'))
	console.log(`Number of buttons created are ${btns.length}`)
	 for (const btn of btns) {
		 await btn.click()
	 }
	 btns =await driver.findElements(By.xpath('//button[text()="Delete"]'))
	console.log(`Number of buttons remaining are ${btns.length}`)
	
	
  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}

AddRemoveEle()