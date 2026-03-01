import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Accessibility: page has a main landmark', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await expect(home.mainSection).toBeVisible();
});