const { test, expect } = require('@playwright/test');

// Define the test
test('Login test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://todos.dev.deltagreen.cz/auth/login');

  // Fill and submit the login form
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Wait for navigation to the logged-in page
  await page.waitForNavigation();

  // Verify the URL to confirm successful login
  const url = page.url();
  expect(url).toBe('https://todos.dev.deltagreen.cz/');

  // Optionally, verify some content on the logged-in page
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Page Title'); // Replace with actual title if known

  // Example of verifying an element on the page
  const welcomeMessageElement = await page.locator('h1');
  await expect(welcomeMessageElement).toHaveText('Welcome'); // Replace with actual expected text
});
