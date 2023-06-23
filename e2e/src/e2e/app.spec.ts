import { test, expect } from '@playwright/test';

test('website', async ({ page }) => {
  await page.goto('/');

  const greeting = page.locator('h1');
  await expect(greeting).toContainText('Welcome website');
});
