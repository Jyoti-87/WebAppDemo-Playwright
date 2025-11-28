import{test,expect} from '@playwright/test'
import { LoginPage } from '../webapp_page_objects/LoginPage';
import dataset from '../utils/loginTestData.json';

// Login with valid credential
 test(`login into a app with valid credential` , async({browser, page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl();
    await loginPage.validLogin('jyoti.sajwan@gmail.com', 'IamKing@009');
 })

//  Login with Invalid Credential
test(`login into a app with invalid credential` , async({browser, page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl();
    await loginPage.validLogin('jyoti.sajwan@gmail.com', 'IamKing@008');
    await page.waitForLoadState('networkidle');
 })


//  Login with Test Data

for (const data of dataset){
    test(`login into a app for ${data.username}` , async({browser, page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl();
    await loginPage.validLogin(data.username, data.password)
    // await page.pause();
})
}


