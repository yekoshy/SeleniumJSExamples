// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Positive test case', function () {
  this.timeout(30000);
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it('Positive test case', async function () {
    await driver.get("https://demoqa.com/automation-practice-form");

    // Fill out the form
    await driver.findElement(By.id("firstName")).sendKeys("Camille");
    await driver.findElement(By.id("lastName")).sendKeys("Lacoste");
    await driver.findElement(By.id("userEmail")).sendKeys("camille.lacoste@example.com");
    await driver.findElement(By.css("label[for='gender-radio-2']")).click();
    await driver.findElement(By.id("userNumber")).sendKeys("1234567890");

    // Select Date of Birth
    await driver.findElement(By.id("dateOfBirthInput")).click();
    const monthDropdown = await driver.findElement(By.css(".react-datepicker__month-select"));
    await monthDropdown.findElement(By.css("option[value='0']")).click();
    const yearDropdown = await driver.findElement(By.css(".react-datepicker__year-select"));
    await yearDropdown.findElement(By.xpath("//option[. = '2000']")).click();
    await driver.findElement(By.css(".react-datepicker__day--001")).click();

    // Select Subjects
    let input = await driver.findElement(By.xpath("//input[@id='subjectsInput']"))
        await input.sendKeys('m');
        await input.sendKeys(Key.ENTER);

    // Select Hobbies
    await driver.findElement(By.css(".custom-checkbox:nth-child(1) > .custom-control-label")).click();
    await driver.findElement(By.css(".custom-checkbox:nth-child(2) > .custom-control-label")).click();

    // Upload File
    let file = path.resolve("C:\\Users\\fatou\\Desktop\\Test Selenium\\example.png")
    await driver.findElement(By.id('uploadPicture')).sendKeys(file)

    // Fill Address
    await driver.findElement(By.id("currentAddress")).sendKeys("123 Demo Street");
    await driver.findElement(By.css("#state .css-1wa3eu0-placeholder")).click();
    await driver.findElement(By.id("react-select-3-option-0")).click();
    await driver.findElement(By.css("#city .css-1wa3eu0-placeholder")).click();
    await driver.findElement(By.id("react-select-4-option-0")).click();

    // Submit Form
    await driver.findElement(By.id("submit")).click();

    // Validate Submission
    const modalTitle = await driver.findElement(By.id("example-modal-sizes-title-lg")).getText();
    expect(modalTitle).to.equal("Thanks for submitting the form", "Form submission failed");

    // Close Modal
    await driver.findElement(By.id("closeLargeModal")).click();
  });
});