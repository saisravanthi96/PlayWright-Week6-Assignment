import {Page,Locator} from '@playwright/test';

export class HomePage{   
    readonly page:Page;
    readonly navlinks:Locator;

    constructor(page:Page){
    this.page=page;
    this.navlinks=page.getByRole('navigation').getByRole('link');
    }
    
    async goto() {
    await this.page.goto('https://raider-test-site.onrender.com/');
    }
     

}