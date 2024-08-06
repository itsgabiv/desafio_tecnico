const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar listeners de eventos do Node aqui, se necessário
    },
    specPattern: "cypress/integration/**/*.spec.{js,jsx,ts,tsx}",
    fixturesFolder: "cypress/fixtures",
    supportFile: "cypress/support/index.js"
  }
});
