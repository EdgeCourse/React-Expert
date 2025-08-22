import { test, expect } from '@playwright/test';

test.describe('Mantine + Router app', () => {
  test('navigation: Home ⇄ About', async ({ page }) => {
    //await page.goto('/');
    await page.goto('/'); 
 
    await expect(page.getByRole('heading', { level: 1, name: /home page/i })).toBeVisible();

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page.getByRole('heading', { level: 1, name: /about us/i })).toBeVisible();
  });

  test('login as Guest → see Dashboard → logout', async ({ page }) => {
    await page.goto('/');

    // initially no Dashboard link when logged out
    await expect(page.getByRole('link', { name: 'Dashboard' })).toHaveCount(0);

    // header Login button logs in as "Guest" in your current App.tsx
    await page.getByRole('button', { name: 'Login' }).click();

    // now Dashboard appears and username text shows (Guest)
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByRole('heading', { level: 1, name: /dashboard/i })).toBeVisible();

    // logout returns to logged-out state
    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page.getByRole('link', { name: 'Dashboard' })).toHaveCount(0);
  });

  test('toggle theme (light ↔ dark)', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');

    const before = await html.getAttribute('data-mantine-color-scheme');
    await page.getByRole('button', { name: 'Toggle color scheme' }).click();
    const after = await html.getAttribute('data-mantine-color-scheme');

    expect(after).not.toBe(before);
  });
});
