import { test, expect } from '@playwright/test';

test('Successful login with correct credentials', async ({ page }) => {
  await page.goto('https://login-page-ci-cd-testing.vercel.app/');

  await page.fill('#username', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Listen for success alert
  page.on('dialog', dialog => {
    expect(dialog.message()).toBe('Login successful!');
    dialog.accept();
  });

  await page.click('button[type="submit"]');

  // Wait a bit for dialog to appear (CI friendly)
  await page.waitForTimeout(1000);
});