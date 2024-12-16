/*Use cases to test 
 1.Negative scenario keep an empty field while adding note >>> expected results an error will appear 
 2.Positive scenario Adding note succuessfully>>> expected results: note has been added 
 3.edit an available note and click cancel while editing it >>> expected results: note hasn't been edited succussfully   
 4.edit note succuessfully  >>> expected results: note has been edited succussfully 
 5.delete note.  
 6.clear all notes*/

import { By, Builder, Key, until } from 'selenium-webdriver';
import { assert } from 'Chai';

async function takingNotes(driver, noteTitle, noteBody, action) {

  //insert Note title to remove any old notes in case of update 
  let titleInput = await driver.findElement(By.id("note-title-input"));
  await titleInput.sendKeys(Key.CONTROL + "a");
  await titleInput.sendKeys(Key.DELETE);
  await titleInput.sendKeys(noteTitle);

  //insert NoteBody and to remove any old notes in case of update 
  let BodyInput = await driver.findElement(By.id("note-details-input"))
  await BodyInput.sendKeys(Key.CONTROL + "a");
  await BodyInput.sendKeys(Key.DELETE);
  await BodyInput.sendKeys(noteBody);
  // wait 3 seconds beofe taking action, just to douple check all is working as expected
  // click  button for add-note or update-note or cancel-note
  await driver.sleep(3000);
  await driver.findElement(By.id(action)).click();



}

async function NoteText(driver, noteIndex, expectedText, assertionMsg) {

  // to locate the added note
  let addedNote = await driver.findElement(By.css(`#list-of-notes > div:nth-child(${noteIndex}) > p`));
  // get the result of getText();
  let noteMsg = await addedNote.getText();
  console.log("The Actual note text is " + noteMsg);
  // verfiy the added note is correctly diaplayed
  assert.equal = (noteMsg, expectedText, assertionMsg)

}








describe('Taking Notes Testsuite', function () {
  let driver;

  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://testpages.eviltester.com/styled/apps/notes/simplenotes.html');
    // Maximize the web page
    await driver.manage().window().maximize();
    // to Scrolldown to see the elements
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight/3);");

  })

  afterEach(async function () {
    await driver.quit();
  })


  it('Negative test empty field ', async function () {
    //insert the note data
    await takingNotes(driver, "first Note", "", "add-note")
    // verify that the note wasn't added 
    let errorNote = await driver.findElement(By.id("note-status-details"))
    // get the result of getText();
    let errorMsg = await errorNote.getText();
    // verify the correct error message is diaplayed
    assert.equal(errorMsg, 'Error Adding Note', "Note is added succussfully");


  });




  it('Positive test adding one note', async function () {
    //insert the note data
    await takingNotes(driver, "first Note", "test", "add-note");
    // check the adde Note text
    await NoteText(driver, 1, "first Note", "different Note is added");
  });


  it('click cancel while editing the note', async function () {
    // Add first note 
    await takingNotes(driver, "first Note", "test", "add-note");
    // get the actual note text ();
    await NoteText(driver, 1, "first Note", "different Note is added");
    //Update the actual note
    await takingNotes(driver, "updated Note", "test2", "cancel-note");
    // verfiy the exisitng not wasn't updated
    await NoteText(driver, 1, "first Note", "Note is updated succussfully");


  });

  it('click update button after editing the note', async function () {
    // Add first note 
    await takingNotes(driver, "first Note", "test", "add-note");
    // get the actual note text and assert it  ();
    await NoteText(driver, 1, "first Note", "different Note is added");
    // to locate the edit button and click on it 
    await driver.findElement(By.css("div:nth-child(1)>button.edit-note-in-list")).click();
    //Update the actual note and click update button
    await takingNotes(driver, "updated Note", "test2", "update-note");
    // get the text of the updated note and assert it 
    await NoteText(driver, 1, "updated Note", "Note hasn't been updated succussfully");


  });



  it('delete added note', async function () {
    // Add first note 
    await takingNotes(driver, "first Note", "test", "add-note");
    // get the actual note text and assert it  ();
    await NoteText(driver, 1, "first Note", "different Note is added");
    // to locate the delete button and click on it 
    await driver.findElement(By.css("div:nth-child(1)>button.delete-note-in-list")).click();
    //to navigate to the Alert and accept it
    let alert = await driver.switchTo().alert();
    let alertText = await alert.getText();
    await alert.accept();
    // Verify the alert message
    assert.include(alertText, "first Note");
    let childElements = await driver.findElements(By.css("#list-of-notes > *"));
    let childCount = await childElements.length;
    assert.strictEqual(childCount, 0, "Note has been not deleted");


  });



  it('clear all notes', async function () {
    // add more than one note
    await takingNotes(driver, "first Note", "test", "add-note");
    await takingNotes(driver, "second Note", "test", "add-note");
    await takingNotes(driver, "third Note", "test", "add-note");
    await takingNotes(driver, "fourth Note", "test", "add-note");
    // get the notes count
    let childElements = await driver.findElements(By.css("#list-of-notes > *"));
    let childCount = await childElements.length;
    console.log(`The Notes Length is ${childCount}`);
    // click on clear all button
    let clearAllButton = await driver.findElement(By.css("#clear-notes"));
    await clearAllButton.click();
    // to accept the alert
    let alert = await driver.switchTo().alert();
    let alertText = await alert.getText();
    await alert.accept();
    // Verify the alert message
    assert.strictEqual(alertText, "Are you sure you want to delete all notes");
    // assert that all notes are deleted.
    childElements = await driver.findElements(By.css("#list-of-notes > *"));
    childCount = await childElements.length;
    console.log(`The Notes Length afer removing all notes is ${childCount}`);
    assert.strictEqual(childCount, 0, "Not all notes are deleted.");

  });

});