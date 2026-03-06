// tests/login/negative.spec.js
import { test, expect } from '@playwright/test';

test('Login fails with incorrect credentials', async ({ page }) => {
  await page.goto('https://login-page-ci-cd-testing.vercel.app/');

  await page.fill('#username', 'wrong_user');
  await page.fill('#password', 'wrong_pass');
  await page.click('button[type="submit"]');

  await expect(page.locator('[data-test="error"]')).toHaveText('Sorry, your username or password is incorrect');
});
//last test for locked out user
test('Locked out user shows correct error', async ({ page }) => {
  await page.goto('https://login-page-ci-cd-testing.vercel.app/');

  await page.fill('#username', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('button[type="submit"]');
  await page.waitForSelector('[data-test="error"]', { timeout: 5000 });
  await expect(page.locator('[data-test="error"]')).toHaveText('Sorry, this user has been locked out');
});