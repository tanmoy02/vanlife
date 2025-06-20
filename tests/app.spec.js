import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173'; // Assuming Vite's default dev server port

test.describe('Van Life App Navigation and Content', () => {
  test('should load the home page correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('h1:has-text("You got the travel plans, we got the travel vans.")')).toBeVisible();
    await expect(page.locator('a:has-text("Find your van")')).toBeVisible();
  });

  test('should navigate to the About page and load its content', async ({ page }) => {
    await page.goto(BASE_URL);
    // Click the About link
    await page.locator('nav >> text=About').click();
    await expect(page).toHaveURL(`${BASE_URL}/about`);
    await expect(page.locator('h1:has-text("Don’t squeeze in a sedan when you could relax in a van.")')).toBeVisible();
  });

  test('should navigate to the Vans page and load its content', async ({ page }) => {
    await page.goto(BASE_URL);
    // Click the Vans link
    await page.locator('nav >> text=Vans').click();
    await expect(page).toHaveURL(`${BASE_URL}/vans`);
    // The Vans page is simple for now
    await expect(page.locator('h1:has-text("Vans page goes here")')).toBeVisible();
  });
});
