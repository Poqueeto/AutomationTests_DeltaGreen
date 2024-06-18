const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  await page.goto('http://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
