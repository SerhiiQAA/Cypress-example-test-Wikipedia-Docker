describe('Wikipedia tests', () => {
  
  beforeEach(() => {
    cy.visit('/');  // використовуємо лише відносний шлях
  });

  it('should load the main page and verify elements', () => {
    cy.location('protocol').should('eq', 'https:');
    cy.title().should('eq', 'Wikipedia');
    cy.get('.central-textlogo__image').should('be.visible');
    cy.get('#js-link-box-fr > strong').should('be.visible');
  });

  it('should navigate to French Wikipedia and verify heading', () => {
    cy.get('#js-link-box-fr > strong').click();
    cy.url().should('include', 'fr.wikipedia.org');
    cy.get('#firstHeading').should('have.text', 'Bienvenue sur Wikipédia');
  });

});


