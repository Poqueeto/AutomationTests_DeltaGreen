// frontend/example.test.js
const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
  const element = await page.locator('h1');
  await expect(element).toHaveText('Example Domain');
});
