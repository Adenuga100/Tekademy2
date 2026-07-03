import { expect,Locator, Page } from "@playwright/test";
// import { page } from "../hooks/hook";
// import path from "path";
// import process from "node:process";


export class LoginPage {

    constructor(private page: Page) {}

    // Define locators as methods
    passwordInput() {
     return this.page.locator('input[id="password"]');
    }

    emailInput() {
     return this.page.locator('input[id="email"]');
    }

    clickLoginBtn() {

     //  return this.page.getByRole('button', { name: 'Continue with this email' });
     
      return this.page.locator('button').filter({ hasText: 'Continue with this email' });
     
    }

    clickRememberMe() {
     return this.page.locator('input[id="remember"]');
    }

    homeTitle() {
     return this.page.locator('img[class="object-contain w-full"]');
    }

    errorLocator(expectedMessage: string) {
     return this.   page.getByText(expectedMessage).first();
    }

    success(successmessage: string) {
     return this.page.getByText(successmessage);
    }

    pickTime() {
     return this.  page.getByRole('textbox', { name: 'Time' });
    }

    selectDurations() {
     return this.page.getByRole('spinbutton', { name: 'Duration (minutes)' });
    }

    classTitles() {
     return this.page.locator('input[id="class-title"]');
    }

    pickDates() {
     return this.page.getByRole('textbox', { name: 'Date' });
    }
    
    clickBtn(btn: string) {
     return this.page.locator(`button:has-text("${btn}")`);
    }
     

    menuButton(menus: string) {
        // return this.page.locator(`text=${menu}`);
        //  this.page.waitForLoadState('networkidle');
        return this.page.getByRole('link', { name: menus }); 
    }
    
    clickDropdownse(drop: string) {
     return this.page.getByRole('combobox').filter({ hasText: `${drop}` });
    }

    selectOptionLocator(options: string) {
        return this.page.getByRole('option', { name: `${options}` }).first(); // Adjust the locator as needed
    }

    numberOfResourcesLocator() {
        return this.page.locator('//h3[text()]//span'); // Adjust the locator as needed
    }

    files() {
     return this.page.locator('input[type="file"]');
    }

    clickFileUrlAndIsPublisheddFile() {
     return this.page.locator('input[type="checkbox"]');
    }

    closeX() {
     return this.page.locator('button[data-slot="dialog-close"]');
    }

    fillTitle() {
     return this.page.locator('input[id="resource-title"]');
    }

    waitVideo() {
     return this.page.locator('div[role="progressbar"]');
    }

    category() {
        return this.page.locator('//button[@id="resource-category"]/following-sibling::select');
    }
    // clickAddResource() {
    //  return this.page.locator('button[type="submit"]');
    // }
    // unCheck() {
    //  return this.page.locator('input[type="checkbox"]');
    // }
    fillTittleOrUrl() {
      return this.page.locator('input[placeholder="Search resources by title or URL..."]');
    }

    resultTitles(titleorurl: string) {
     return this.page.locator('p[class="font-medium text-[#111827]"]').first();
    }

    resultOption(option: string) {
     return this.page.locator(`//td[@data-slot="table-cell"]//span[text()='${option}']`).first();
    }

    fillDescription() {
     return this.page.locator('textarea[id="resource-description"]');
    }

    fillTags() {
     return this.page.locator('input[id="resource-tags"]');
    }

    fillFileUrl() {
     return this.page.locator('input[type="url"]');
    }

    libraryPages() {
     return this.page.getByText('Library & Resources');
    }
  

    clickAddResource() {
     return this.page.locator('button[type="submit"]');
    }

    totalNumber() {
     return this.page.locator('(//div[text()="Total Resources"]/following::p)[1]');
    }

    unCheck() {
     return this.page.locator('input[type="checkbox"]');
    }

    firstNameInput() {
     return this.page.locator('input[id="user-firstName"]');
    }

    randomemail() {
     return this.page.locator('input[id="user-email"]');
    }

    lastNameInput() {
     return this.page.locator('input[id="user-lastName"]');
    }

    dOB() {
     return this.page.locator('input[id="user-dateOfBirth"]');
    }
    
    strongPassword() {
     return this.page.locator('input[type="password"]');
    }

    pickROles() {
     return this.page.locator('[class="flex flex-wrap gap-2"] [type="button"]');
    }

    forgotPswclick(forgotpsw: string) {
     return this.page.locator(`a:has-text("${forgotpsw}")`);
    }
    generateRandomName() { 

        const durations = ["15","30", "60","90","120"];
        const mins = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
        const hours = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
        const newdates = ["1", "2", "3", "4", "5","4","5", "6", "7"];
        const firstnames = ["James","Michael", "David","Sarah"];
        const lastnames = ["Williams", "Johnson", "Brown", "Davis"];
        const years = ["1990", "2000", "2001", "2002", "2003","2004","2005", "2006", "2007", "2008", "2009","2010","2011", "2012","2013"];
        const months = ["01", "02", "03", "04", "05","04","05", "06", "07"];
        const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];

        // const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];

        const duration = durations[Math.floor(Math.random() * durations.length)];
        const min = mins[Math.floor(Math.random() * mins.length)];
        const hour = hours[Math.floor(Math.random() * hours.length)];
        const newdate = newdates[Math.floor(Math.random() * newdates.length)];
        const first = firstnames[Math.floor(Math.random() * firstnames.length)];
        const last = lastnames[Math.floor(Math.random() * lastnames.length)];
        const year = years[Math.floor(Math.random() * years.length)];
        const month = months[Math.floor(Math.random() * months.length)];
        const date = dates[Math.floor(Math.random() * dates.length)];
       

        return { duration, min, hour, newdate,first, last, year, month, date };
        

    }

     

    async navigate(): Promise<void>  {
     await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
    }

    async enterPassword(password: string): Promise<void>  {
        return await this.passwordInput().fill(password);
    }

    async enterEmail(email: string): Promise<void>  {
        return await this.emailInput().fill(email);
    }

    async clickLoginButton(): Promise<void> {
        await this.clickLoginBtn().scrollIntoViewIfNeeded();
        await this.clickLoginBtn().click();
        await expect(this.clickLoginBtn()).toBeVisible({timeout: 60000});

        // console.log("Current URL:", this.page.url());
        // console.log("Page title:", await this.page.title());

        // const body = await this.page.textContent("body");
        // console.log(body?.substring(0, 500));
        return;
    //     console.log("Current URL:", this.page.url());

    //    return await expect(this.page).toHaveURL(/dashboard/, {
    //         timeout: 60000,
    //     });


        // console.log("Dashboard loaded");
    }


 
    async picktimes(): Promise<void>  {
        let { hour, min } = this.generateRandomName();
        return await this.pickTime().fill(`${hour}:${min}`);
    }

    async selectDuration(): Promise<void>  {
        let { duration} = this.generateRandomName();
        return await this.selectDurations().fill(`${duration}`);
    }

    async enterDuration(dura: string): Promise<void>  {
        return await this.selectDurations().fill(dura);
    }

    async classTitle(classtitle: string): Promise<void>  {
        return await this.classTitles().fill(classtitle);
    }

    async selectDate(): Promise<void> {
        let { newdate} = this.generateRandomName();
        const date = new Date();
    
      // Add 2 days (day after tomorrow)
      date.setDate(date.getDate() + parseInt(`${newdate}`));

     // Format as YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];
        return await this.pickDates().fill(formattedDate);
    }


    

    async alertMessage(alertmessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const dateField = this.page.locator('input[id="class-title"]'); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await dateField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async alertDateMessage(alerdateMessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const dateField = this.page.getByRole('textbox', { name: 'Date' }); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await dateField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async alertTimeMessage(alertimetmessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const timeField = this.page.getByRole('textbox', { name: 'Time' }); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await timeField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async alertDurationMessage(alertimetmessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const durationField = this.page.getByRole('spinbutton', { name: 'Duration (minutes)' }); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await durationField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }
  
    async clickRememberMeCheckbox(): Promise<void> {
        return await this.clickRememberMe().click();
    }


    async getHomeTitle(): Promise<Locator> {
        
        return await this.homeTitle();
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        await this.errorLocator(expectedMessage).scrollIntoViewIfNeeded();
        return await this.errorLocator(expectedMessage);
    }

  async successFulMessage(successmessage: string): Promise<Locator> {
    const message = this.success(successmessage);

    await message.waitFor({state: 'visible'});

    return message;
  }

    storedTitleOrUrls: string = '';


    async enterSearchTerm(titleorurl: string): Promise<void> {


       await this.fillTittleOrUrl().fill(titleorurl);

        // this.storedTitleOrUrl = await this.fillTittleOrUrl().getAttribute('value') || '';
        this.storedTitleOrUrls = titleorurl;
    }

    async resultTitle(): Promise<Locator> {
        
        return  await this.resultTitles(this.storedTitleOrUrls);
    }

    async resultOptions(): Promise<Locator> {


        return await this.resultOption(this.storedOption);
    }

    async unClick(): Promise<Locator> {
        
        return await this.clickAddResource();
    }

    async totalNumberOfResources(): Promise<boolean> {
         await this.totalNumber();
        let totalNumberOfResource = await this.totalNumber().getAttribute('value') || '';
        return totalNumberOfResource === this.numberOfResource;
    }

    async libraryPage(): Promise<Locator> {
        
        return await this.libraryPages();
    }

   

    async enterTitle(title: string) : Promise<void> {
        return await this.fillTitle().fill(title);
    }

    async backspaceTitle() : Promise<void> {
        // this.fillTitle().scrollIntoViewIfNeeded();
        return await this.fillTitle().clear();
    }

    async waitForVideoUpload() : Promise<void> {
        // Wait for the "Video uploaded successfully" message to appear
        // return await this.waitVideo().clear();
        while(true) {
            const isVisible = await this.waitVideo().isVisible();
            if (!isVisible) {
                break; // Exit the loop when the progress bar is no longer visible
            }
        }
    }

    async addResource(): Promise<void> {
        await this.clickAddResource().scrollIntoViewIfNeeded();
        return await this.clickAddResource().click();
    }

    async uncheckPublish(): Promise<void> {
        await this.unCheck().scrollIntoViewIfNeeded();
        
        return await this.unCheck().click();
    }

    async close(): Promise<void> {
      
        return await this.closeX().click();
    }

    async clickSearchDropdown(drop: string): Promise<void> {
      
        return await this.clickDropdownse(drop).click();
    }
    



storedOption: string = '';


async selectSearchOption(option: string): Promise<void> {
    // Click the element using the locator
    await this.selectOptionLocator(option).click();

    // Store the value you just clicked for verification later
    this.storedOption = option; 
}

numberOfResource: string = '';


async numberOfResources(): Promise<void> {
    this.numberOfResource = (await this.numberOfResourcesLocator().getAttribute('value')) || '';
}


async selectCategory(category: string): Promise<void> {
     await this.category().selectOption({ label: category });
}

async enterDescription(description: string): Promise<void> {
    await this.fillDescription().scrollIntoViewIfNeeded();
    return await this.fillDescription().fill(description);
}

async enterFileUrl(fileUrl: string): Promise<void> {
    await this.fillFileUrl().scrollIntoViewIfNeeded();
    return await this.fillFileUrl().fill(fileUrl);
}

    async enterTags(description: string): Promise<void> {
        await this.fillTags().scrollIntoViewIfNeeded();
        return await this.fillTags().fill(description);
    }

    async uploadFile(filename: string): Promise<void> {
        await this.files().scrollIntoViewIfNeeded();
         await this.files().setInputFiles(filename);
        return  
    }

    async clickFileUrlAndIsPublished(): Promise<void> {
        await this.clickFileUrlAndIsPublisheddFile().scrollIntoViewIfNeeded();
        return await this.clickFileUrlAndIsPublisheddFile().click();
        
    }
   
    async clickMenu(menus: string): Promise<void> {
        await expect(this.menuButton(menus)).toBeVisible({timeout: 60000});
        await this.menuButton(menus).scrollIntoViewIfNeeded();
    
       await this.menuButton(menus).click();
    }


  
    async clickButton(btn: string): Promise<void>  {
       await this.clickBtn(btn).scrollIntoViewIfNeeded();
       return await this.clickBtn(btn).click({ timeout: 120000 });
    }
 

 async selectRole(numberToClick: number = 1): Promise<void> {
    // 1. Locate all checkboxes, but FILTER OUT the parent container that has the text "SuperAdmin"
    const checkboxes = this.pickROles().filter({ hasNotText: 'SuperAdmin' });
    
    // 2. Get the total count of the remaining valid checkboxes
    const totalCount = await checkboxes.count();
    
    // 3. Ensure we don't click more than available
    const finalNumberToClick = Math.min(numberToClick, totalCount);

    // 4. Create a list of indices and shuffle them
    const indices = Array.from({ length: totalCount }, (_, i) => i);
    const shuffled = indices.sort(() => 0.5 - Math.random());

    // 5. Click the checkboxes based on shuffled indices
    for (let i = 0; i < finalNumberToClick; i++) {
        const randomIndex = shuffled[i];
        // Use .nth() to pick the specific checkbox and click it
        await checkboxes.nth(randomIndex).click();
    }
}

 async selectARole(role: string): Promise<void> {
    // 1. Locate all checkboxes, but FILTER OUT the parent container that has the text "SuperAdmin"
    const checkboxes = this.pickROles().filter({ hasText: role });
    
    // 2. Get the total count of the remaining valid checkboxes
    const totalCount = await checkboxes.count();
    
    // 3. Ensure we don't click more than available
    const finalNumberToClick = Math.min( totalCount);

    // 4. Create a list of indices and shuffle them
    const indices = Array.from({ length: totalCount }, (_, i) => i);
    const shuffled = indices.sort(() => 0.5 - Math.random());

    // 5. Click the checkboxes based on shuffled indices
    for (let i = 0; i < finalNumberToClick; i++) {
        const randomIndex = shuffled[i];
        // Use .nth() to pick the specific checkbox and click it
        await checkboxes.nth(randomIndex).click();
    }
}




    async enterFirstName(): Promise<void> {
        let {first} = this.generateRandomName();

      return await this.firstNameInput().fill(first);
      
    }

    async enterLastName(): Promise<void> {
        let {last} = this.generateRandomName();

      return await this.lastNameInput().fill(last); 
    }

    async enterDOB(): Promise<void> {
        let {year} = this.generateRandomName();
        let {month} = this.generateRandomName();
        let {date} = this.generateRandomName();

      return await this.dOB().fill(`${year}-${month}-${date}`);

      
    }

    async password(psw: string): Promise<void> {
        return await this.strongPassword().fill(psw);
      
    }

    async randonmEmail(): Promise<void> {
        let email = `use_${crypto.randomUUID()}@testmail.com`;
   
        return await this.randomemail().fill(email);
    }

    async emailexxist(email: string): Promise<void> {

        return await this.randomemail().fill(email);
    }

    async forgetPassword(forgotpsw: string): Promise<void> {
        return await this.forgotPswclick(forgotpsw).click();
    }
   
}



