import HomePage from '../../support/pageObjectmodel/homePage';

describe('US020', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.footerAboutUs().should('be.visible').click({ force: true });
    cy.url().should('eql', 'https://test.urbanicfarm.com/about');
  });
});
