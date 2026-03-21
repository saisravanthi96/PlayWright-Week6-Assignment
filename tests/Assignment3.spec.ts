import { test, expect } from '@playwright/test';


test('product_test', async ({page}) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Skinsheen Bronzer Stick' }).click();
    await expect(page.getByRole('heading', { name: 'Skinsheen Bronzer Stick' })).toBeVisible();
    
})