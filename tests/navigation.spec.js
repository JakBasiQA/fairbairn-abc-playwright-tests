import { test, expect } from '@playwright/test';

const NAV_EXPECTED_URL = {
  'ABOUT US': /about/i,
  'CLASSES': /classes/i,
  'CONTACT': /contact/i,
};

test(' @smoke navigation behaviour: clicking key items changes URL and shows content', async ({ page }) => {
  await page.goto('/');

  const clicks = ['ABOUT US', 'CLASSES', 'CONTACT'];

  for (const item of clicks) {
    const urlBefore = page.url();

    const link = page.getByRole('link', { name: item });
await expect(link).toBeVisible();
await link.click();

    // URL should change from what it was before
    await expect(page).toHaveURL(NAV_EXPECTED_URL[item], { timeout: 15000 });

    // Main content area should be visible (Wix-style sites often use PAGES_CONTAINER)
    await expect(page.locator('#PAGES_CONTAINER')).toBeVisible();

    // Reset to home for next loop
    await page.goto('/');
  }
});