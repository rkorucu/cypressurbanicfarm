const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://test.urbanicfarm.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
  projectId: 'thnvmj',
  hideXHR: true,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  env: {
    url: 'https://test.urbanicfarm.com/',
  },
});
