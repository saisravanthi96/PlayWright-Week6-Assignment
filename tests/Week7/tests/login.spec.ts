import {test,expect} from "@playwright/test";
import {Loginpage} from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";

test.describe('logintests', ()=>{
    let loginPage: Loginpage;
    
    test.beforeEach(async({page})=>{
        loginPage = new Loginpage(page);
        await loginPage.goto();
        
    })
    //tests
    test('valid login',async({page})=>{
        await loginPage.login('aguspe','12341234');
        await expect(page).toHaveURL(/account/);
    })
    test('invalid login',async({page})=>{
        await loginPage.login('aguspe','123');
        await expect(page.getByText(/Incorrect login or password /)).toBeVisible();
    })
    test ('empty UserName',async({page})=>{
        await loginPage.login('','12341234');
        await expect (loginPage.usernameInput).toHaveAttribute('required','');
    })
    test ('empty Password',async({page})=>{
        await loginPage.login('aguspe','');
        await expect (loginPage.passwordInput).toHaveAttribute('required','');
    })
})