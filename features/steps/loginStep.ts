import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage'
import { title } from "process";
// import { } from '../hooks/hook';

// 1. Declare the variable at the top (without 'this')
let loginPage: LoginPage;


Given('I navigate to the login page', async function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage = new LoginPage(this.page!);
    await loginPage.navigate();
});

// Given('I navigate to the login page', async () => {
//     loginPage = new LoginPage(page);
//     await loginPage.navigate();
// });


When('User enter valid password as {string}', async function ( pass: string) {
  // Write code here that turns the phrase above into concrete actions
  // await loginPage.enterPassword(this.page!, pass);
  await loginPage.enterPassword(pass);
})

When('User enter valid email as {string}', async function (email: string)   {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterEmail(email);
})



When('User click on login button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.clickLoginButton();
  
})




Then('I should be redirected to the dashboard', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.getHomeTitle()).toBeVisible({ timeout: 5000 });
})

When('User click on remember me checkbox', async () => {
  // Write code here that turns the phrase above into concrete actions
   await loginPage.clickRememberMeCheckbox();
})

Then('user receive error message as {string}', async (expectedMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
   await expect( await loginPage.errorMessage(expectedMessage)).toHaveText(expectedMessage);
})


When('User click on {string} button', async function (btn: string) {
  // Write code here that turns the phrase above into concrete actions
  // await loginPage.clickButton(page, btn);
  await loginPage.clickButton(btn);
})




When('User click on {string} menu', async (menus: string) => {
    // You must pass the 'page' object to a static method
     await expect(loginPage.menuButton(menus)).toBeVisible({
        timeout: 60000,
    });

    await loginPage.clickMenu(menus);
});



When('User enter time', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.picktimes();
})


When('User enter duration', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectDuration();
})

When('User enter class title as {string}', async (classtitle: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.classTitle(classtitle);
})

Then('User should see a success message {string}', async (successmessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.successFulMessage(successmessage)).toHaveText(successmessage);
})

When('User enter date', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectDate();
})


Then('user receive an alert message as {string}', async (alertmessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  //  await expect( await liveClassPage.alertMessage(alertmessage)).toBe(alertmessage);

  const validationMessage = await loginPage.alertMessage(alertmessage);
  expect(validationMessage).toBe(alertmessage);

})

Then('user receive an alert date message as {string}', async (dateMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertDateMessage(dateMessage);
  expect(validationMessage).toBe(dateMessage);
})

Then('user receive an alert time message as {string}', async (timeMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertTimeMessage(timeMessage);
  expect(validationMessage).toBe(timeMessage);
})

When('User enter duration as {string}', async (dura: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterDuration(dura);
})

Then('user receive an alert duration message as {string}', async (durationMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertDurationMessage(durationMessage);
  expect(validationMessage).toBe(durationMessage);
})





When('User enter invalid email as {string}', async (email: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterEmail(email);
})





When('User enter tags as {string}', async (tags: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterTags(tags);
})

When('User select category as {string}', async (category: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectCategory(category);
})

When('User upload file {string}', async (filename: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.uploadFile(filename);
})

When('User click fileUrl and isPublished', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.clickFileUrlAndIsPublished();
})

When('User enter description as {string}', async  (descrip: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterDescription(descrip);
})

When('User enter fileUrl as {string}', async (fileUrl: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterFileUrl(fileUrl);
})

When('User enter title as {string}', async (title: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterTitle(title);
})

When('User click on Add Resource button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.addResource();
})

When('User uncheck the Publish immediately checkbox',async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.uncheckPublish();
})

Then('User should be redirected to library page', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.libraryPage()).toBeVisible({ timeout: 5000 });

})

When('User click on x button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.close();
})

Then('User should see the search result with title', async () => {
  // Write code here that turns the phrase above into concrete actions
   await expect( await loginPage.resultTitle()).toBeVisible({ timeout: 5000 });
})

When('User enter title or url as {string}', async (titleorurl: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterSearchTerm(titleorurl);
})

When('User select {string} option', async (option: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectSearchOption(option);
})

Then('User should see the search results resources', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.resultOptions()).toBeVisible({ timeout: 5000 });
})

When('User click on {string} dropdown', async (drop: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.clickSearchDropdown(drop);
})

Then('user is unable to click the Add Resource button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.unClick()).toBeDisabled({ timeout: 5000 });
})


When('User enter email as', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.randonmEmail();
})


When('User enter first name', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterFirstName();
})

When('User enter last name', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterLastName();
})

When('User enter strong password as {string}', async(psw: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.password(psw);
})

When('User enter DOB',async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterDOB();
})

When('User select any role',async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectRole();
})

When('User click on {string} link', async (forgotpsw: string) => {
  // Write code here that turns the phrase above into concrete actions
   await loginPage.forgetPassword(forgotpsw);
})

When('User backspace title to make it empty', async () => {
  // Write code here that turns the phrase above into concrete actions
   await loginPage.backspaceTitle();
})

When('user wait for the video to be uploaded', async  () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.waitForVideoUpload();
})

When('User enter email as {string}', async (email: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.emailexxist(email);
})

When('User select role as {string}', async (role: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectARole(role);
})

Then('User should see the total number of resources matches the total resources on library page', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.totalNumberOfResources()).toBe(true);
})

When('user view the total number of resources on library page', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.numberOfResources();
})
