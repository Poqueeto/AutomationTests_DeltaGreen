// playwright.config.js
module.exports = {
  testDir: './frontend',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
};
