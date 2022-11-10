const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 12000,
    execTimeout: 20000,
    pageLoadTimeout: 40000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,
    failOnStatusCode: false,
    viewportHeight: 1200,
    viewportWidth: 1920,
  },
  e2e: {
    includeShadowDom: true,
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
      // implement node event listeners here
      // require("cypress-mochawesome-reporter/plugin")(on);
      // allureWriter(on, config);
      // return config;
    },
  },
});
