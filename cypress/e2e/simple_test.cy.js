describe('Jenkins Statistik Demo - Universal Tests', () => {

  // 1. SUCCESS: Prüft einfach, ob die Seite geladen wurde (Universal)
  it('1. Erfolg: Wikipedia Startseite lädt', () => {
    cy.visit('https://de.wikipedia.org');
    cy.get('body').should('be.visible'); 
  });

  // 2. FAILURE: Provoziert einen Fehler (Sollte scheitern)
  it('2. Fehler: Erwartet falschen Text (für Screenshot-Test)', () => {
    cy.visit('https://www.google.com');
    // Wir suchen nach Text, der garantiert nicht da ist
    cy.get('body').should('contain', 'Diese Nachricht existiert nicht');
  });

  // 3. SUCCESS: Prüft ein Standard-Element (Universal)
  it('3. Erfolg: Beispiel-Seite hat eine Überschrift', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('exist');
  });

  // 4. PENDING: Wird übersprungen (Blau/Grau in der Statistik)
  it.skip('4. Skip: Dieser Test wird in der Statistik als "Pending" gelistet', () => {
    cy.visit('https://example.com');
  });

  // 5. FAILURE: Zeitüberschreitung (Sollte scheitern)
  it('5. Fehler: Sucht nach einem Element, das es nicht gibt', () => {
    cy.visit('https://example.com');
    // Cypress wartet 4 Sek. auf dieses ID, findet sie nicht -> Fail
    cy.get('#nicht-existierende-id-123').should('exist');
  });

});