const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280, // Set the default width to 1280 pixels
  viewportHeight: 720,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
