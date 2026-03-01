const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,               // Erstellt kleine Diagramme
    embeddedScreenshots: true,  // Baut Screenshots direkt in die HTML-Datei ein
    inlineAssets: true,         // Keine extra Ordner für Bilder nötig
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Das Plugin wird hier registriert
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});