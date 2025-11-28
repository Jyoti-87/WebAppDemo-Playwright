import { Page,Locator,expect } from "@playwright/test";

export class LoginPage{

    private page:Page;
    private userName: Locator;
    private password: Locator;
    private submit: Locator;

    constructor(page: Page )
    {
        this.page = page;
        this.userName = page.locator(`form[action='/login'] [name='email']`);
        this.password = page.locator(`form[action='/login'] [name='password']`);
        this.submit = page.locator (`form[action ='/login'] [type='submit']`);
    }

    async goToUrl(){
       await this.page.goto('https://www.automationexercise.com/login');
    }

    async validLogin(username:string, password:string){
    await this.page.waitForLoadState('networkidle');
    await this.userName.click();
    await this.userName.fill(username)
    await this.password.click();
    await this.password.fill(password);
    await this.submit.click();
    await this.page.waitForLoadState('domcontentloaded');
    }
}