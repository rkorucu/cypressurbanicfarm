import HomePage from '../../support/pageObjectmodel/homePage';

describe('US022', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.footerPrivacyPolicy().should('be.visible').click({ force: true });
    cy.url().should("eql", "https://test.urbanicfarm.com/privacy-policy");
  });
});
