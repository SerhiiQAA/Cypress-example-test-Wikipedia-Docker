// cypress/e2e/wikipediaTests.cy.js

import WikipediaHomePage from '../pages/wikipediaHomePage';
import WikipediaFrenchPage from '../pages/wikipediaFrenchPage';

describe('Wikipedia Tests', () => {
  const homePage = new WikipediaHomePage();
  const frenchPage = new WikipediaFrenchPage();

  beforeEach(() => {
    homePage.visit();
  });

  it('Verify main page loads and basic elements', () => {
    homePage.verifyProtocol();
    homePage.verifyTitle();
    homePage.verifyMainLogoVisibility();
    homePage.verifyFrenchLink();
  });

  it('Verify navigation to French Wikipedia and check content', () => {
    homePage.goToFrenchPage();
    frenchPage.verifyHeading();
    frenchPage.verifyContentLoaded();
  });

  it('Verify search functionality on main page', () => {
    homePage.verifySearchFunctionality('Cypress');
  });

  it('Verify navigation menu on French Wikipedia', () => {
    frenchPage.verifyNavigationMenu();
  });

  it('Verify footer link on French Wikipedia', () => {
    frenchPage.verifyFooterLink();
  });

  it('Verify page search results on French Wikipedia', () => {
    frenchPage.verifyPageInSearchResults('Cypress');
  });
});
