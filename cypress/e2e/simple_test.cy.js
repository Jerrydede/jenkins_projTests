describe('Erweiterte Jenkins Statistik Tests', () => {

  it('1. Erfolgreicher Test: Google Suche ist erreichbar', () => {
    cy.visit('https://www.google.com');
    cy.get('img.lnXpPe', { timeout: 10000 }).should('be.visible');
  });

  it('2. Fehlgeschlagener Test: Falscher Text auf Wikipedia', () => {
    cy.visit('https://de.wikipedia.org');
    // Dieser Test wird scheitern und einen Screenshot erzeugen
    cy.get('#welcome-to-wikipedia').should('contain', 'Willkommen bei Facebook');
  });

  it('3. Erfolgreicher Test: CSS Check', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('have.css', 'font-size', '32px');
  });

  it.skip('4. Übersprungener Test (Pending): Feature noch nicht fertig', () => {
    cy.visit('https://example.com');
    cy.get('.new-feature').click();
  });

  it('5. Fehlgeschlagener Test: Element existiert nicht', () => {
    cy.visit('https://example.com');
    // Cypress wird 4 Sekunden suchen und dann mit Fehler abbrechen
    cy.get('#nicht-vorhandener-button').click();
  });

});