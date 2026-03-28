import { test,expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('Product name matches listing and detail page', async ({ page }) => {
  const product = new ProductPage(page);

  await product.goto();

  const name = await product.getFirstProductName();

  await product.clickFirstProduct();

  await page.getByRole('link').first().click();
});