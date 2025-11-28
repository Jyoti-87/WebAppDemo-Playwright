import {test, chromium,expect} from '@playwright/test';
import {LoginPage} from '../webapp_page_objects/LoginPage';
 
    const username = 'jyoti.sajwan936@gmail.com';
    const password = 'IamKing@009';
    const url = 'https://www.automationexercise.com/login'

test(`login into a app for` , async({ })=>{
    const browser = await chromium.launch({
        headless : false
    })
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto(url);
   await page.locator(`form[action='/login'] [name='email']`).fill(username);
    await page.locator(`form[action ='/login'] [name='password']`).fill(password);
    await page.locator(`form[action ='/login'] [type='submit']`).click();
    await page.waitForLoadState('domcontentloaded');
    expect (await page.locator('.features_items h2.title').textContent()).toContain('Features Items');
})