import { Page, expect } from '@playwright/test';

export class Home {
  private page: Page;
  private searchTextbox;

  constructor(page: Page) {
    this.page = page;
    this.searchTextbox = page.locator('#APjFqb'); // Update locator if needed
  }

  async goto() {
    const url = process.env.URL;
    if (!url) {
      throw new Error('URL is not defined and no default URL is provided.');
    }
    await this.page.setViewportSize({ width: 1920, height: 1080 });
    await this.page.goto(url);
  }

  async searchKeywords(param1: string) {
    if (!param1) throw new Error('Search query is undefined');
    await expect(this.searchTextbox).toBeEnabled({ timeout: 10000 });
    await this.searchTextbox.click();
    await this.searchTextbox.fill(param1);
    await this.searchTextbox.press('Enter');
  }
}
