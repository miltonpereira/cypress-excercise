const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  viewportWidth: 2880,
  viewportHeight: 1800,
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl= 'https://www.saucedemo.com'

      return config
    },
  },
});
