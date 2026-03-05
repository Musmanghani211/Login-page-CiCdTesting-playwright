import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,        // Increase global timeout
  use: {
    headless: true,      // CI me headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 50         // Helps CI browser behave like local
    }
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});