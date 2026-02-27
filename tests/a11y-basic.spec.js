import { test, expect } from '@playwright/test';

test('Accessibility: page has a main landmark', async ({ page }) => {
  await page.goto('/');
  const main = page.locator('main');
  await expect(main).toBeVisible();
});