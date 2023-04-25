const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
  projectId: "thnvmj",
  hideXHR: true,
  "chromeWebSecurity": false ,
  env: {
    url: "https://test.urbanicfarm.com/",
  },


});
