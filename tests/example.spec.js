// @ts-check
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Fairbairn/i);
});

test('navigation bar is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();
});
  // Click the get started link.
 // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

