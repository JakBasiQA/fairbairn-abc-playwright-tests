import { test, expect, devices } from '@playwright/test';

test.setTimeout(60000);

test.use({
  ...devices['iPhone 12'],
});

test('mobile navigation: open menu and verify items exist', async ({ page }) => {
  await page.goto('/');

  // Wait a moment for Wix to finish loading/hydrating on mobile
  await page.waitForLoadState('networkidle');

  const openMenu = page.getByRole('button', { name: 'Open navigation menu' });
  await expect(openMenu).toBeVisible({ timeout: 15000 });

  // "Trial" click checks if it's clickable without actually clicking
  await openMenu.click({ trial: true });

  // Use tap (mobile-like interaction)
  await openMenu.click({ force: true });

  const menuNav = page.locator('#MENU_AS_CONTAINER_EXPANDABLE_MENU');

  // Wait for menu to become visible
  await expect(menuNav).toBeVisible({ timeout: 20000 });

  // Check expected items (text)
  await expect(menuNav).toContainText('ABOUT US');
  await expect(menuNav).toContainText('CONTACT');
});