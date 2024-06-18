// playwright.config.js
module.exports = {
  testDir: './Tests/frontend',
  use: {
    headless: true, // or false if you want to see the browser window
    viewport: { width: 1280, height: 720 },
  },
};
