import { Home } from '../pages/home';
import { Result } from '../pages/result';
import { Playlist } from '../pages/playlist';
import { DataLoader } from '../utils/dataLoader';
import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test('Test Google Search', async ({ page }) => {
  const homePage = new Home(page);
  const resultPage = new Result(page);
  const playlistPage = new Playlist(page);

  // Load test data for the current environment
  const testData = DataLoader.loadTestData();

  const searchQuery = testData?.Module1TestData?.skill1;
  if (!searchQuery) {
    throw new Error('Test data for skill1 is not defined.');
  }

  await homePage.goto();
  await homePage.searchKeywords(searchQuery);
  await resultPage.clickOnPlaylist();
  await playlistPage.clickOnVideo();
});
