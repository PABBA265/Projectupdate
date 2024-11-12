import { Page, expect } from '@playwright/test';

export class Result {
  private page: Page;
  private playlistLink;

  constructor(page: Page) {
    this.page = page;
    this.playlistLink = page.getByRole('link', { name: 'Playwright by Testers Talk' }); // Update selector as needed
  }

  async clickOnPlaylist() {
    await expect(this.playlistLink.first()).toBeVisible({ timeout: 10000 });
    await this.playlistLink.first().click();
  }
}
