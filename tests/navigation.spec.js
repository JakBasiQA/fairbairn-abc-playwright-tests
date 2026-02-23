import { test, expect } from '@playwright/test';

const NAV_ITEMS = [
  'HOME',
  'ABOUT US',
  'NEWS',
  'CLASSES',
  'ACHIEVEMENTS',
  'PARTNERS & SPONSORS',
  'COACHES & COMMITTEE',
  'EVENTS',
  'GALLERY',
  'CONTACT',
];

test('navigation behaviour: clicking key items changes URL and shows content', async ({ page }) => {
  await page.goto('/');

  const clicks = ['ABOUT US', 'CLASSES', 'CONTACT'];

  for (const item of clicks) {
    const urlBefore = page.url();

    await page.getByRole('link', { name: item }).click();

    // URL should change from what it was before
    await expect(page).not.toHaveURL(urlBefore);

    // Main content area should be visible (Wix-style sites often use PAGES_CONTAINER)
    await expect(page.locator('#PAGES_CONTAINER')).toBeVisible();

    // Reset to home for next loop
    await page.goto('/');
  }
});