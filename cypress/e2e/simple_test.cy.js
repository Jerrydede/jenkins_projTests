describe('Mein Jenkins Test', () => {
  it('besucht Google und prüft den Titel', () => {
    cy.visit('https://www.google.com');
    cy.title().should('not.be.empty');
  });
  
  it('sollte scheitern, um den Screenshot-Export zu testen', () => {
    cy.visit('https://www.google.com');
    // Wir provozieren einen Fehler:
    cy.title().should('eq', 'Diese Seite heißt garantiert nicht so');
  });
});
