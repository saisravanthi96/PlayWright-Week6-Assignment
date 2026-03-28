import { Page, expect } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  nav = () => this.page.getByRole('navigation');

  link = (name: string) =>
    this.nav().getByRole('link', { name });

  heading = (name: string) =>
    this.page.getByRole('heading', { name });

  // Actions
  async goto() {
    await this.page.goto('https://raider-test-site.onrender.com/');
  }

  async clickMenu(name: string) {
    await this.link(name).click();
  }

  // Assertions
  async verifyURL(url: string | RegExp) {
    await expect(this.page).toHaveURL(url);
  }

  async verifyHeading(name: string) {
    await expect.soft(this.heading(name)).toBeVisible();
  }
}