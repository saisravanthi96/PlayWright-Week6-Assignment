import {test,expect} from '@playwright/test';

//test for succesfull login
test('Verify successful login',async({page})=>{
    await page.goto('/');
    await page.getByRole("link", { name: 'Login or register' }).click();
    await page.getByLabel("Login name").fill("aguspe");
    await page.getByLabel("Password").fill("12341234");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/account/);
    await expect(page.getByText(/account dashboard/)).toBeVisible();
})

//Failed login with wrong password
test('Verify failed login with wrong password',async({page})=>{
    await page.goto('/');
    await page.getByRole("link", { name: 'Login or register' }).click();
    await page.getByLabel("Login name").fill("aguspe");
    await page.getByLabel("Password").fill("sravanthi");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText(/Incorrect login or password /)).toBeVisible();
})

//Empty username
test('verify empty username',async({page})=>{
    await page.goto('/');
    await page.getByRole("link", { name: 'Login or register' }).click();
    await page.getByLabel("Password").fill("12341234");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#loginFrm_loginname')).toHaveAttribute('required','');   
})


//empty password 
test('verify empty password',async({page})=>{
    await page.goto('/');
    await page.getByRole("link", { name: 'Login or register' }).click();
    await page.getByLabel("Login name").fill("aguspe");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#loginFrm_password')).toHaveAttribute('required','');   
})

