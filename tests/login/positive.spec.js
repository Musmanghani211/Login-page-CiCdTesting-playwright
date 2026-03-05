// tests/login/positive.spec.js
import { test, expect } from '@playwright/test';

test('Successful login with correct credentials', async ({ page }) => {
  await page.goto('https://login-page-ci-cd-testing.vercel.app/');

  await page.fill('#username', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.waitForSelector('[data-test="error"]', { timeout: 5000 });
await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');

  page.on('dialog', dialog => {
    expect(dialog.message()).toBe('Login successful!');
    dialog.accept();
  });

  await page.click('button[type="submit"]');
});