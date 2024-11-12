import { Page, expect } from '@playwright/test';

export class Playlist {
  private page: Page;
  private videoLink;

  constructor(page: Page) {
    this.page = page;
    this.videoLink = page.locator('#container > #thumbnail');
  }

  async clickOnVideo() {
    // Wait for the video link to be attached in the DOM
    await this.page.waitForSelector('#container > #thumbnail', { state: 'attached', timeout: 20000 });

    // Optional: Wait for the element to become visible
    await expect(this.videoLink.first()).toBeVisible({ timeout: 10000 });

    // Click on the video
    await this.videoLink.first().click();
  }
}
