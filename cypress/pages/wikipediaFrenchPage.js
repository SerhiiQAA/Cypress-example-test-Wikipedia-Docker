// cypress/pages/wikipediaFrenchPage.js

class WikipediaFrenchPage {
    verifyHeading() {
      cy.get('#firstHeading').should('have.text', 'Bienvenue sur Wikipédia');
    }
  
    verifyContentLoaded() {
      cy.get('.mw-parser-output').should('be.visible');
    }
  
    verifyNavigationMenu() {
      cy.get('#p-navigation', { timeout: 10000 }).should('exist');
      cy.get('#p-navigation').should('be.visible');
      cy.get('#p-navigation a').first().click();
      cy.url().should('include', 'fr.wikipedia.org');
    }
  
    verifyFooterLink() {
      cy.get('#footer-places a', { timeout: 10000 }).should('exist');
      cy.get('#footer-places a').first().click();
      cy.url().should('include', 'fr.wikipedia.org');
    }
  
    verifyPageInSearchResults(pageName) {
      cy.get('#searchInput').type(pageName);
      cy.get('form').submit();
      cy.contains(pageName).should('be.visible');
    }
  }
  
  export default WikipediaFrenchPage;
  