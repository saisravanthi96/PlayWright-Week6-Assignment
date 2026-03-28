import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://raider-test-site.onrender.com/');
  }
  
  async getFirstProductName() {
    return await this.page
      .locator('.product-card')
      .first()
      .locator('.product-name')
      .innerText();
  }

  async clickFirstProduct() {
    await this.page.locator('.product-card').first().click();
  }

  async verifyProductName(expectedName: string) {
    await expect(this.page.locator('.product-detail-name'))
      .toHaveText(expectedName);
  }
}