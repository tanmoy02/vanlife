import { test, expect } from '@playwright/test';

const BASE_URL =
  process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:5173'; // Default to local dev server

// Function to get the current memory usage from the browser
const getMemoryUsage = (page) => {
  return page.evaluate(() => performance.memory.usedJSHeapSize);
};

// No need to force GC

test.describe('Van Life App Navigation and Content', () => {
  test('should load the home page correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('div').filter({ hasText: /^Home$/ })).toBeVisible();
  });

  test('should navigate to the About page and load its content', async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    // Click the About link
    await page.locator('nav >> text=About').click();
    await expect(page).toHaveURL(`${BASE_URL}/about`);
    await expect(page.locator('div').filter({ hasText: /^About$/ })).toBeVisible();
  });

  test('should navigate to the Vans page and load its content', async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    // Click the Vans link
    await page.locator('nav >> text=Vans').click();
    await expect(page).toHaveURL(`${BASE_URL}/vans`);
    // The Vans page is simple for now
    await expect(page.locator('div').filter({ hasText: /^Vans$/ })).toBeVisible();
  });

  // Test for memory leaks
  test('should not have a memory leak after 10 navigations', async ({
    page,
  }) => {
    await page.goto(BASE_URL);

    const initialMemory = await getMemoryUsage(page);

    // Navigate between pages 10 times
    for (let i = 0; i < 10; i++) {
      await page.locator('nav >> text=About').click();
      await page.locator('nav >> text=Vans').click();
      await page.locator('nav >> text=About').click();
    }

    const finalMemory = await getMemoryUsage(page);

    // Allow for a small increase in memory, but fail if it's too large
    const memoryGrowth = finalMemory - initialMemory;
    const memoryThreshold = 1024 * 1024 * 5; // 5MB threshold for memory growth

    expect(memoryGrowth).toBeLessThan(memoryThreshold);
  });
});
