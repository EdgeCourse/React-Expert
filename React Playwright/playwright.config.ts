// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:5173',   // so page.goto('/') works
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    // Re-enable WebKit later once it’s fixed on your machine
    // { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
  reporter: [['list'], ['html', { open: 'never' }]],
  // ⬇️ Playwright will boot your app for the tests
  webServer: {
    command: 'npm run dev -- --port 5173', // force the port for reliability
    port: 5173,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
