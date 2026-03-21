import { test, expect } from '@playwright/test';

test('Verify product name matches with product description page', async ({ page }) => {
  
  // Step 1: Navigate to site
  await page.goto('https://raider-test-site.onrender.com/');

  // Step 2: Capture first product name from listing page
  const firstProduct = page.locator('.product-card').first();
  const productNameListing = await firstProduct.locator('.product-title').innerText();

  console.log('Product name on listing page:', productNameListing);

  // Step 3: Click on the first product
  await firstProduct.click();

  // Step 4: Capture product name on detail page
  const productNameDetail = await page.locator('.product-detail h1').innerText();

  console.log('Product name on detail page:', productNameDetail);

  // Step 5: Assertion
  await expect(productNameDetail).toBe(productNameListing);
});
