import {test,expect} from "@playwright/test";
import { NavigationPage } from "../pages/NavigationPage";

const menuData = [
  { name: 'Home', url: '/', heading: 'Featured Products' },
  { name: 'Apparel & Accessories', url: '/?category=Apparel', heading: 'Apparel' },
  { name: 'Makeup', url: '/?category=Makeup', heading: 'Makeup' },
  { name: 'Skincare', url: '/?category=Skincare', heading: 'Skincare' },
  { name: 'Fragrance', url: '/?category=Fragrance', heading: 'Fragrance' },
  { name: 'Men', url: /Men/ },
  { name: 'Hair Care', url: '/?category=Hair Care', heading: 'Hair Care' },
  { name: 'Books', url: '/?category=Books', heading: 'Books' },
];


test('Verify navigation menu links (data-driven)', async ({ page }) => {
  const navPage = new NavigationPage(page);
  await navPage.goto();

  for (const item of menuData) {
    await navPage.clickMenu(item.name);
    await navPage.verifyURL(item.url);

    if (item.heading) {
      await navPage.verifyHeading(item.heading);
    }
  }
});