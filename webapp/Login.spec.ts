import {test, expect} from '@playwright/test';
import { LoginPage } from '../webapp_page_objects/LoginPageOld';
import dataset from '../utils/loginTestData.json';

// Execution With the different test data by using the forEACH block

// dataset.forEach((data) => {
// test("login into a app for " + data.username, async({browser, page})=>{
    
//     const loginPage = new LoginPage(page);
//     await loginPage.goToUrl();
//     await loginPage.validLogin(data.username, data.password)
//     // await page.pause();
// })
// })


// Execution With the different test data by using the forOf block
for (const data of dataset){
    test(`login into a app for ${data.username}` , async({browser, page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl();
    await loginPage.validLogin(data.username, data.password)
    // await page.pause();
})
}