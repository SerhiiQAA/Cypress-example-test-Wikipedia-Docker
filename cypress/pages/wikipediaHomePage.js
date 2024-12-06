// cypress/pages/wikipediaHomePage.js

class WikipediaHomePage {
    visit() {
      cy.visit('/');
      cy.wait(1000);
    }
  
    verifyProtocol() {
      cy.location('protocol').should('eq', 'https:');
    }
  
    verifyTitle() {
      cy.title().should('eq', 'Wikipedia');
    }
  
    verifyMainLogoVisibility() {
      cy.get('.central-textlogo__image').should('be.visible');
    }
  
    verifyFrenchLink() {
      cy.get('#js-link-box-fr > strong').should('be.visible');
    }
  
    goToFrenchPage() {
      cy.get('#js-link-box-fr > strong').click();
      cy.wait(1000);
    }
  
    verifyElementInMenu(elementSelector) {
      cy.get(elementSelector).should('be.visible');
    }
  
    verifySearchFunctionality(searchTerm) {
      cy.get('#searchInput').type(searchTerm);
      cy.get('form').submit();
      cy.url().should('include', searchTerm);
    }
  }
  
  export default WikipediaHomePage;
  