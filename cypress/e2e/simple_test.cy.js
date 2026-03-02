describe('Umfangreiche Jenkins Report Demo', () => {

  // --- GRUPPE 1: NAVIGATION & PERFORMANCE ---
  it('01 - Erfolg: Google Startseite lädt schnell', () => {
    cy.visit('https://www.google.com');
    cy.get('body').should('be.visible');
  });

  it('02 - Erfolg: Wikipedia Suche ist vorhanden', () => {
    cy.visit('https://de.wikipedia.org');
    cy.get('input[name="search"]').should('be.visible');
  });

  it('03 - Fehler: Erwarte falsche URL (Screenshot Test)', () => {
    cy.visit('https://example.com');
    cy.url().should('include', 'falsche-seite-123');
  });

  // --- GRUPPE 2: ELEMENT-INTERAKTIONEN ---
  it('04 - Erfolg: Button-Check auf Example.com', () => {
    cy.visit('https://example.com');
    cy.get('a').should('have.attr', 'href');
  });

  it('05 - Skip: Feature A (Wartungsarbeiten)', { tags: '@smoke' }, () => {
    cy.log('Dieser Test wird übersprungen');
  });
  it.skip('05 - Skip: Feature A (Wartungsarbeiten)', () => {});

  it('06 - Fehler: Klick auf unsichtbares Element', () => {
    cy.visit('https://www.google.com');
    cy.get('#nicht-da', { timeout: 2000 }).click();
  });

  // --- GRUPPE 3: CONTENT VALIDIERUNG ---
  it('07 - Erfolg: Wikipedia Hauptseite Titel-Check', () => {
    cy.visit('https://de.wikipedia.org');
    cy.title().should('contain', 'Wikipedia');
  });

  it('08 - Erfolg: CSS Prüfung der Überschrift', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('09 - Fehler: Falscher Textinhalt (Screenshot Test)', () => {
    cy.visit('https://example.com');
    cy.get('p').should('contain', 'Dies ist ein Geheimtext');
  });

  // --- GRUPPE 4: STRUKTUR & FORMULARE ---
  it('10 - Erfolg: Prüfe Viewport Skalierung', () => {
    cy.viewport('iphone-x');
    cy.visit('https://example.com');
    cy.get('body').should('be.visible');
  });

  it('11 - Skip: API Test (Noch nicht implementiert)', () => {
    cy.log('Wird später hinzugefügt');
  });
  it.skip('11 - Skip: API Test (Noch nicht implementiert)', () => {});

  it('12 - Fehler: Timeout bei Server-Response Simulation', () => {
    cy.visit('https://example.com');
    cy.get('.loader', { timeout: 1000 }).should('not.exist');
    // Wir erzwingen einen Fehler durch ein Element, das existieren MUSS
    cy.get('footer').should('have.text', 'Das Ende');
  });

  // --- GRUPPE 5: DIVERSE CHECKS ---
  it('13 - Erfolg: Prüfe Anzahl der Links', () => {
    cy.visit('https://example.com');
    cy.get('a').should('have.length.at.least', 1);
  });

  it('14 - Erfolg: Cookie Check (Dummy)', () => {
    cy.visit('https://www.google.com');
    cy.getCookie('test').should('be.null');
  });

  it('15 - Fehler: Attribut-Vergleich schlägt fehl', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('have.attr', 'class', 'falsche-klasse');
  });

  it('16 - Erfolg: Grundlegender Page Load Test', () => {
    cy.visit('https://example.com');
    cy.get('body').should('exist');
  });

  it('17 - Erfolg: Google Search Input ist sichtbar', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').should('be.visible');
  });

});