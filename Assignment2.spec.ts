import {test, expect} from '@playwright/test';
//verify every page in the navigation menu loads correctly
test('Verify navigation menu links',async({page})=>{
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('/');    
    await expect(page.locator('body > main > h1')).toHaveText('Featured Products');

    await page.getByRole('link', { name: 'Apparel & Accessories' }).click();
    await expect(page).toHaveURL('/?category=Apparel');
    await expect(page.locator('body > main > h1')).toHaveText('Apparel');

    await page.getByRole('link', { name: 'Makeup' }).click();
    await expect(page).toHaveURL('/?category=Makeup');
    await expect(page.locator('body > main > h1')).toHaveText('Makeup');

    await page.getByRole('link', { name: 'Skincare' }).click();
    await expect(page).toHaveURL('/?category=Skincare');
    await expect(page.locator('body > main > h1')).toHaveText('Skincare');

    await page.getByRole('link', { name: 'Fragrance' }).click();
    await expect(page).toHaveURL('/?category=Fragrance');
    await expect(page.locator('body > main > h1')).toHaveText('Fragrance');

    await page.getByRole('link', { name: 'Men' }).click();
    await expect(page).toHaveURL('/?category=Men');
    await expect(page.locator('body > main > h1')).toHaveText('Men');

    await page.getByRole('link', { name: 'Hair Care' }).click();
    await expect(page).toHaveURL('/?category=Hair Care');
    await expect(page.locator('body > main > h1')).toHaveText('Hair Care');

    await page.getByRole('link', { name: 'Books' }).click();
    await expect(page).toHaveURL('?category=Books');
    await expect(page.locator('body > main > h1')).toHaveText('Books');
})