import {test, expect} from '@playwright/test';
//verify every page in the navigation menu loads correctly
test('Verify navigation menu links',async({page})=>{
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('/');    
    await expect.soft(page.getByRole('heading', { name: 'Featured Products' })).toBeVisible();

    await page.getByRole('link', { name: 'Apparel & Accessories' }).click();
    await expect(page).toHaveURL('/?category=Apparel');
    await expect.soft(page.getByRole('heading', { name: 'Apparel' })).toBeVisible();

    await page.getByRole('link', { name: 'Makeup' }).click();
    await expect(page).toHaveURL('/?category=Makeup');
    await expect.soft(page.getByRole('heading', { name: 'Makeup' })).toBeVisible();

    await page.getByRole('link', { name: 'Skincare' }).click();
    await expect(page).toHaveURL('/?category=Skincare');
    await expect.soft(page.getByRole('heading', { name: 'Skincare' })).toBeVisible();

    await page.getByRole('link', { name: 'Fragrance' }).click();
    await expect(page).toHaveURL('/?category=Fragrance');
    await expect.soft(page.getByRole('heading', { name: 'Fragrance' })).toBeVisible();

    await page.getByRole('link', { name: 'Men' }).click();
    await expect(page).toHaveURL('/?category=Men');
    await expect.soft(page).toHaveURL(/Men/);

    await page.getByRole('link', { name: 'Hair Care' }).click();
    await expect(page).toHaveURL('/?category=Hair Care');
    await expect.soft(page.getByRole('heading', { name: 'Hair Care' })).toBeVisible();

    await page.getByRole('link', { name: 'Books' }).click();
    await expect(page).toHaveURL('/?category=Books');
    await expect.soft(page.getByRole('heading', { name: 'Books' })).toBeVisible();
})